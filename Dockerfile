# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.14.0
ARG PNPM_VERSION=10.4.1

# ---- Base image ----
FROM node:${NODE_VERSION} AS base
RUN --mount=type=cache,target=/root/.npm \
    npm install --global corepack@latest
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate
WORKDIR /app

# ---- Builder ----
FROM base AS builder
WORKDIR /app
# Copy only package manager files first for better cache
COPY --link package.json ./
# If you have a pnpm-lock.yaml, copy it here as well for reproducible builds
COPY --link pnpm-lock.yaml ./

# Set up pnpm cache
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV PNPM_STORE_DIR=/root/.pnpm-store

RUN --mount=type=cache,target=${PNPM_STORE_DIR} \
    pnpm install --frozen-lockfile

# Copy the rest of the app
COPY --link . ./

# Build the Next.js app (outputs to .next)
RUN pnpm run build

# ---- Production image ----
FROM node:${NODE_VERSION}-slim AS final

# Security: create non-root user first
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Install pnpm in the final stage
RUN --mount=type=cache,target=/root/.npm \
    npm install --global corepack@latest
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

# Create cache directories with proper permissions
RUN mkdir -p /home/appuser/.cache/node/corepack && \
    chown -R appuser:appgroup /home/appuser/.cache

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder --link /app/package.json ./
COPY --from=builder --link /app/node_modules ./node_modules
COPY --from=builder --link /app/.next ./.next
COPY --from=builder --link /app/public ./public
COPY --from=builder --link /app/next.config.mjs ./next.config.mjs
COPY --from=builder --link /app/src ./src
COPY --from=builder --link /app/content ./content
COPY --from=builder --link /app/components.json ./components.json

ENV NODE_ENV=production
ENV COREPACK_HOME=/home/appuser/.cache/node/corepack

USER appuser

EXPOSE 3388

CMD ["node", "./node_modules/next/dist/bin/next", "start", "--port", "3388"]
