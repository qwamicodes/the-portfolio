# Running with Docker

You can run this project using Docker for a consistent, containerized environment. The provided Docker setup uses Node.js `22.14.0` and pnpm `10.4.1` as specified in the Dockerfile.

## Build and Start with Docker Compose

1. Build and start the app using Docker Compose:

   ```bash
   docker compose up --build
   ```

2. The app will be available at [http://localhost:3000](http://localhost:3000).

## Project-specific Docker Details

- **Node.js version:** 22.14.0
- **pnpm version:** 10.4.1
- **Exposed port:** `3000` (Next.js default)
- **No external dependencies or persistent volumes required**
- **No environment variables required by default**
  - If you add a `.env` file, uncomment the `env_file` line in `docker-compose.yml`.
- **Runs as a non-root user for security**

No additional configuration is needed for a basic setup. If you add services (like a database), update `docker-compose.yml` accordingly.
