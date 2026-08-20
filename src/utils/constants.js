const skillGroups = [
  [
    "Frontend",
    [
      "React.js",
      "Redux Toolkit",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "React Router",
    ],
  ],
  [
    "Backend & Database",
    [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "RBAC",
      "MongoDB",
      "Mongoose",
      "Redis",
    ],
  ],
  [
    "Tools & Engineering",
    [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "CI/CD",
      "Vercel",
      "Jira",
      "VS Code",
    ],
  ],
  [
    "AI Productivity",
    [
      "ChatGPT",
      "GitHub Copilot",
      "Claude AI",
      "Google Gemini",
      "Cursor AI",
      "Perplexity AI",
    ],
  ],
];

const projects = [
  
  {
    number: "01 / TEFC– ",
    title: "Fitness & Wellness Platform",
    description:
      "Developed responsive React.js interfaces for workout programs, memberships, personal training, Implemented reusable components, REST API integration, responsive layouts, and interactive forms to deliver a seamless user experience.",
    tags: ["React", "Redux", "REST API", "RBAC"],
    image: "/tefc-preview.jpg",
    liveUrl: "https://tefc.fit/",
    githubUrl: "https://github.com/Devendra-k-yadav",
  },
  {
    number: "02 /LeelaMart- E-COMMERCE",
    title: "Full Stack Web Application",
    description:
      "Responsive MERN application with API integration, authentication, reusable UI components and database-backed workflows.",
    tags: ["MERN","React","Axios", "Node.js", "MongoDB", "JWT", "Redis", "Docker"],
    image: "/leelamart-preview.jpg",
    liveUrl: "https://leelamart.in/",
    githubUrl: "https://github.com/Devendra-k-yadav",
  },
  {
    number: "03 / Blupen– Education Management Platform",
    title: "Education Management Platform",
    description:
      "Developed secure backend APIs for admissions, attendance, fees, examinations, and reporting.  Implemented JWT authentication, RBAC, pagination, filtering, and validation modules.",
    tags: ["Express.js", "Node.js", "MongoDB",  "JWT", "REST APIs"],
    image: "/blupen-preview.jpg",
    liveUrl: "https://blupen.in/",
    githubUrl: "https://github.com/Devendra-k-yadav/blupen-backend",
  },
  // {
  //   number: "03 / AI PLATFORM",
  //   title: "AI Task Processing Platform",
  //   description:
  //     "A production-oriented task platform with authentication, task management, background processing and status tracking.",
  //   tags: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
  //   liveUrl: "",
  //   githubUrl: "",
  // },
];

const services = [
  [
    "◈",
    "Frontend Development",
    "Responsive, component-driven React interfaces with clean state management and strong UX.",
  ],
  [
    "⌘",
    "Backend Development",
    "Secure Node.js and Express APIs with authentication, validation, RBAC and scalable structure.",
  ],
  [
    "↗",
    "Full Stack Solutions",
    "End-to-end MERN applications connecting polished UI, business logic and persistent data.",
  ],
];

const navigationLinks = [
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

const portfolioConstants = { skillGroups, projects, services, navigationLinks };

export default portfolioConstants;
