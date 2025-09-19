import { HomeIcon, NotebookIcon } from "lucide-react";

import { IData } from "@/types";
import { Icons } from "@/components/icons";

export const DATA: IData = {
  name: "Kwaame Ofori-Adjekum",
  initials: "KOA",
  url: "https://qwamicodes.dev",
  location: "Adenta, Accra - Ghana",
  locationLink: "https://google.com/maps/place/sanfrancisco",
  description: "Software Engineer",
  summary:
    "Having `passion` towards something that allows you to be a creator of things is very rare! and that superpower my friend is `software engineering`. It's been a very long journey from [high school](#education), so you and I can agree that I have been around for sometime 😅 and it has never been the same because I love what I do. I love using my *powers* to create *solutions* that can `scale` and are `efficient`. Recently started exploring the *entrepreneurship industry* and have started working on a some SaaS products, one with my close techies [Eben](https://ebenfrimpong.com) and **George** called [the-purple-box](https://thepurplebox.io) and the other [parnion](https://parnion.com), and education system for clarity of answers. I like to also pick up and learn new technologies and I have recently started picking up [Rust](https://rust-lang.com) for backend and distributed system applications. Been combining that with a bit of high level system designing",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "React Native",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Rust",
    "Docker",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@kwaame.build",
    tel: "+233544683405",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/qwamicodes",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/qwamicodes",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/qwamicodes",
        icon: Icons.x,

        navbar: true,
      },
      showwcase: {
        name: "X",
        url: "https://showwcase.com/qwamicodes",
        icon: Icons.showwcase,

        navbar: true,
      },
      instagram: {
        name: "X",
        url: "https://instagram.com/qwamicodes",
        icon: Icons.instagram,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@kwaame.build",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Rancard Solutions Limited",
      href: "https://rancard.com",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/rancard.png",
      start: "Nov 2023",
      end: "present",
      description: [
        "Moving legacy codebase to new improved codebase with better technologies and a better user experience",
        "Handle production environment of products",
        "Utilized and applied agile development with my team, using tools like clickup",
        "Applying docker and github packages in containerizing new codebase frontend applications",
        "Improved software reliability by writing scalable and production grade application that are accompanied with tests using vitest",
      ],
    },
    {
      company: "Infonaligy",
      href: "https://infonaligy.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Intern",
      logoUrl: "/infonaligy.png",
      start: "Oct 2022",
      end: "Dec 2022",
      description: [
        "Improved software reliability by writing scalable and production grade test using mocha, chai and jest for backends",
        "Implemented and constructed user interface and experience whiles also focusing on mobile-responsive interfaces",
        "Utilized and applied agile development with my team, using tools like trello and jira",
      ],
    },
    {
      company: "Seguah Labs",
      href: "https://seguah.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/seguah.png",
      start: "Nov 2023",
      end: "present",
      description: [
        "Design neat and scalable user interfaces",
        "Implemented modular code and reusable components for interactive features, optimizing performance and maintainability",
        "Implemented responsive design techniques to ensure consistent user experience across various devices",
        "Optimize existing code for better readability, scalability, and performance using modern frontend development techniques and frameworks.",
      ],
    },
  ],
  education: [
    {
      school: "University of Ghana",
      href: "https://ug.edu.gh",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/ug.png",
      start: "Nov 2019",
      end: "Sept 2023",
      completed: false,
    },
    {
      school: "Koforidua Secondary Technical School",
      href: "https://instagram.com/koforidua_sectech/",
      degree: "General Science with Information Technology",
      logoUrl: "/sectech.png",
      start: "Sept 2016",
      end: "Jun 2019",
      completed: true,
    },
  ],
  projects: [
    {
      title: "Parnion",
      type: "webApp",
      href: "https://parnion.com",
      dates: "Aug 2025 - present",
      active: true,
      maintainer: true,
      description:
        "Parnion is a hub that turns questions into clarity, clarity into confidence, and confidence into a path forward—beginning with education and extending into every part of life where information matters—by connecting students, schools, and communities with the answers that truly make a difference.",
      technologies: [
        "React",
        "Next.js",
        "Shadcn UI",
        "Zod",
        "Tanstack",
        "Redux",
        "Typescript",
        "Monorepo",
        "Livestore"
      ],
      links: [
        {
          type: "Website",
          href: "https://parnion.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/parnion.png",
      video: "",
    },
    {
      title: "The Purple Box",
      type: "SaaS",
      href: "https://thepurplebox.io",
      dates: "Oct 2024 - present",
      active: true,
      maintainer: true,
      description:
        "Creating the african preferred alternative for faster email delivery with real-time stats and domain management as well as team collaboration, optimized tracking, detailed reporting, bulk email services, bulk email validation and many more.",
      technologies: [
        "React",
        "Next.js",
        "Shadcn UI",
        "Zod",
        "Tanstack",
        "Redux",
        "Typescript",
        "Monorepo",
      ],
      links: [
        {
          type: "Website",
          href: "https://thepurplebox.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/thepurplebox.png",
      video: "",
    },
    {
      title: "Legivent",
      type: "webApp",
      href: "https://legivent.com",
      dates: "Nov 2023 - present",
      active: true,
      maintainer: true,
      description:
        "Legivent is the next gen way of buying and selling of tickets at a larger scale. We have one of the best user interfaces and experiences that take care of everything from booking to marketing. Later with the help of blockchain technology, we will move to web3",
      technologies: [
        "React",
        "Next.js",
        "Shadcn UI",
        "Zod",
        "Tanstack",
        "Redux",
        "Typescript",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://legivent.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/legivent.png",
      video: "",
    },
    {
      title: "Fingerlicking Cuisine",
      type: "webApp",
      href: "https://finger-licking.com",
      dates: "Nov 2022 - Dec 2022",
      active: false,
      maintainer: true,
      description:
        "Started a cooking business with my room-mates in the University, and decided to go digital with the business since I am capable. We built a POS for students and outsiders to order stews.",
      technologies: [
        "React",
        "JavaScript",
        "Redux",
        "Typescript",
        "Paystack",
        "Figma",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://finger-licking.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/finger-licking.png",
      video: "",
    },
  ],
  hackathons: [],
};
