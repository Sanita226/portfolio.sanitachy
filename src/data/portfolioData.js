export const personalInfo = {
  name: "Sanita Chaudhary",
  shortName: "Sanita",
  title: "Computer Science Student & Aspiring Full-Stack Developer",
  roleTagline: "Building modern, responsive and user-friendly web experiences.",
  degree: "BSc. CSIT (6th Semester)",
  college: "Godawari College",
  university: "Tribhuvan University (TU)",
  location: "Nepal",
  email: "sanitachaudhary.dev@gmail.com",
  github: "https://github.com/Sanita226",
  linkedin: "https://linkedin.com/in/sanitachaudhary",
  status: "Available for Internships & Junior Roles",
  aboutBio: [
    "I am currently studying BSc. CSIT at Godawari College, Tribhuvan University, in my 6th semester. I am deeply focused on developing my frontend and full-stack web engineering skills.",
    "Rather than relying strictly on classroom theory, I believe in actively learning by building functional, well-structured projects. My current day-to-day focus centers around modern JavaScript, React, Next.js, and Tailwind CSS.",
    "I am seeking internship and junior developer opportunities where I can contribute to real-world codebases, learn alongside senior engineers, and continue advancing my craft."
  ],
  stats: [
    { label: "Academic Semester", value: "6th Sem", detail: "BSc. CSIT" },
    { label: "Core Technologies", value: "8+", detail: "Actively Practicing" },
    { label: "Hands-on Projects", value: "5+", detail: "Built & Deployed" },
    { label: "Location", value: "Nepal", detail: "Open to Remote/On-site" },
  ]
};

export const aboutHighlights = [
  {
    title: "Education",
    value: "BSc. CSIT — 6th Semester",
    subtitle: "Godawari College, TU",
    icon: "GraduationCap",
    color: "emerald"
  },
  {
    title: "Location",
    value: "Nepal",
    subtitle: "Kathmandu / Remote-friendly",
    icon: "MapPin",
    color: "cyan"
  },
  {
    title: "Primary Focus",
    value: "Web Development",
    subtitle: "Modern Frontend & Full-Stack",
    icon: "Code2",
    color: "indigo"
  },
  {
    title: "Career Goal",
    value: "Frontend / Full-Stack Developer",
    subtitle: "Internship & Junior Positions",
    icon: "Compass",
    color: "violet"
  }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Core",
    description: "Technologies I use to build dynamic, responsive user interfaces",
    skills: [
      {
        name: "JavaScript",
        level: "Building With",
        statusText: "Core language",
        experienceDetail: "ES6+, DOM APIs, Async/Await, Array Methods, Promises",
        icon: "js",
        color: "#F7DF1E"
      },
      {
        name: "React",
        level: "Building With",
        statusText: "Primary UI library",
        experienceDetail: "Hooks (useState, useEffect, useMemo), Props, Component lifecycle",
        icon: "react",
        color: "#61DAFB"
      },
      {
        name: "Tailwind CSS",
        level: "Building With",
        statusText: "Utility-first styling",
        experienceDetail: "Responsive layouts, custom theming, dark mode, flex/grid systems",
        icon: "tailwind",
        color: "#38BDF8"
      },
      {
        name: "HTML5",
        level: "Comfortable",
        statusText: "Semantic structure",
        experienceDetail: "Semantic tags, Web Accessibility (a11y), SEO standards",
        icon: "html",
        color: "#E34F26"
      },
      {
        name: "CSS3",
        level: "Comfortable",
        statusText: "Modern styling",
        experienceDetail: "Flexbox, CSS Grid, Transitions, Keyframe animations, Responsive media queries",
        icon: "css",
        color: "#1572B6"
      },
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Modern Stack",
    description: "Expanding into full-stack architecture and production tools",
    skills: [
      {
        name: "Next.js",
        level: "Learning",
        statusText: "Full-stack React",
        experienceDetail: "App Router, Server & Client Components, Dynamic Routing, API Routes",
        icon: "nextjs",
        color: "#FFFFFF"
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Version Control",
    description: "Essential tooling for professional developer collaboration",
    skills: [
      {
        name: "Git",
        level: "Comfortable",
        statusText: "Version control",
        experienceDetail: "Branching, merging, commit discipline, merge conflict resolution",
        icon: "git",
        color: "#F05032"
      },
      {
        name: "GitHub",
        level: "Comfortable",
        statusText: "Code collaboration",
        experienceDetail: "Pull Requests, repository management, GitHub Pages, issues",
        icon: "github",
        color: "#E6EDF3"
      },
      {
        name: "VS Code",
        level: "Comfortable",
        statusText: "Primary code editor",
        experienceDetail: "Extensions, debugging, terminal integration, shortcut mastery",
        icon: "vscode",
        color: "#007ACC"
      }
    ]
  }
];

export const projects = [
  {
    id: "dev-portfolio",
    title: "Modern Developer Portfolio",
    subtitle: "Creative Personal Showcase",
    category: "React",
    description: "A high-performance personal portfolio built with React, Vite, and Tailwind CSS. Features dynamic particle background, glassmorphism, responsive design, and smooth animations.",
    fullDescription: "Designed from the ground up to represent an authentic 3rd-year CSIT student journey. Incorporates accessible semantic markup, custom dark theme styling, project filtering, interactive resume preview, and smooth section navigation.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vite", "Motion"],
    featured: true,
    github: "https://github.com/Sanita226/portfolio.sanitachy",
    liveDemo: "#",
    badge: "Current Showcase",
    accent: "from-emerald-500/20 to-teal-500/20",
    borderAccent: "group-hover:border-emerald-500/40",
    imageType: "portfolio"
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro — Kanban Board",
    subtitle: "Productivity & Task Management",
    category: "React",
    description: "A drag-and-drop Kanban task management application inspired by Trello. Built with React and Tailwind CSS, featuring persistent localStorage and task category filtering.",
    fullDescription: "A hands-on project to master React state management, component composition, and browser persistence. Users can create, reorder, edit, and organize tasks across 'To Do', 'In Progress', and 'Completed' columns.",
    tech: ["React", "JavaScript", "Tailwind CSS", "LocalStorage API"],
    featured: true,
    github: "https://github.com/Sanita226/taskflow-kanban",
    liveDemo: "https://taskflow-demo.example.com",
    badge: "Featured Project",
    accent: "from-cyan-500/20 to-blue-500/20",
    borderAccent: "group-hover:border-cyan-500/40",
    imageType: "kanban"
  },
  {
    id: "campus-sphere",
    title: "CampuSphere — Student Portal",
    subtitle: "CSIT Academic Resource Hub",
    category: "Next.js",
    description: "A concept portal for college students to access semester notes, past examination question papers, syllabus guides, and campus notices in a clean, categorized interface.",
    fullDescription: "Built while learning Next.js App Router and server-rendered components. Focuses on organizing BSc. CSIT academic materials with clean search, semester filtering, and mobile-friendly document previews.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    featured: true,
    github: "https://github.com/Sanita226/campus-sphere",
    liveDemo: "https://campussphere-demo.example.com",
    badge: "Next.js Project",
    accent: "from-indigo-500/20 to-purple-500/20",
    borderAccent: "group-hover:border-indigo-500/40",
    imageType: "campus"
  },
  {
    id: "weather-pulse",
    title: "PulseWeather — Atmospheric Radar",
    subtitle: "Interactive Weather & AQI Explorer",
    category: "JavaScript",
    description: "A dynamic real-time weather application connecting to public weather APIs. Displays 5-day forecasts, air quality index, hourly temperature graphs, and city search.",
    fullDescription: "Developed to strengthen core JavaScript asynchronous concepts: fetch API, JSON parsing, handling loading/error states, and updating the DOM dynamically based on location data.",
    tech: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    featured: false,
    github: "https://github.com/Sanita226/pulse-weather",
    liveDemo: "https://pulseweather.example.com",
    badge: "JS Async Project",
    accent: "from-amber-500/20 to-emerald-500/20",
    borderAccent: "group-hover:border-amber-500/40",
    imageType: "weather"
  },
  {
    id: "code-vault",
    title: "CodeVault — Snippet Manager",
    subtitle: "Developer Syntax Highlighter & Organizer",
    category: "React",
    description: "A developer tool for saving, tagging, and copying reusable code snippets. Includes syntax highlighting, copy-to-clipboard, tag search, and quick keyboard shortcuts.",
    fullDescription: "Created to solve personal study needs during 6th semester web development coursework. Allows categorizing snippets for React hooks, CSS layouts, and JavaScript algorithms.",
    tech: ["React", "Tailwind CSS", "JavaScript", "PrismJS"],
    featured: false,
    github: "https://github.com/Sanita226/code-vault",
    liveDemo: "https://codevault.example.com",
    badge: "Dev Utility",
    accent: "from-violet-500/20 to-pink-500/20",
    borderAccent: "group-hover:border-violet-500/40",
    imageType: "code"
  }
];

export const educationData = [
  {
    degree: "BSc. CSIT (Bachelor of Science in Computer Science & Information Technology)",
    institution: "Godawari College",
    affiliation: "Tribhuvan University (TU), Nepal",
    period: "2021 — Present (6th Semester)",
    status: "Currently Enrolled",
    highlight: "Pursuing 4-year rigorous undergraduate degree in Computer Science",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Web Technologies",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems"
    ],
    description: "Developing a solid theoretical and practical foundation in computer science principles, algorithmic problem solving, and modern software engineering practices."
  },
  {
    degree: "+2 Science (Higher Secondary Education)",
    institution: "High School / College",
    affiliation: "National Examination Board (NEB), Nepal",
    period: "Completed",
    status: "Graduated",
    highlight: "Majored in Physics and Mathematics",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Fundamentals"
    ],
    description: "Built strong mathematical reasoning and analytical problem-solving foundation that sparked interest in computing and software development."
  }
];

export const learningJourney = [
  {
    step: "01",
    title: "CS Foundations & Programming Logic",
    period: "Semesters 1 - 2",
    description: "Learned structured programming principles, logic building, C/C++, and computational problem solving at Godawari College.",
    tag: "Fundamentals"
  },
  {
    step: "02",
    title: "Web Core: Semantic HTML & Modern CSS",
    period: "Semester 3",
    description: "Built responsive web pages from scratch using modern CSS Flexbox, Grid systems, and semantic HTML accessibility best practices.",
    tag: "Web Basics"
  },
  {
    step: "03",
    title: "Deep Dive into Modern JavaScript",
    period: "Semesters 3 - 4",
    description: "Focused on ES6+ features, asynchronous JavaScript (Promises, async/await), DOM manipulation, and consuming RESTful APIs.",
    tag: "Core JavaScript"
  },
  {
    step: "04",
    title: "React & Component-Driven UI",
    period: "Semester 5",
    description: "Transitioned to declarative UI development with React. Mastered hooks (useState, useEffect), props, modular component structures, and state flow.",
    tag: "React Ecosystem"
  },
  {
    step: "05",
    title: "Tailwind CSS & Utility Design Systems",
    period: "Semester 5",
    description: "Adopted Tailwind CSS for rapid, scalable UI construction. Built dark-themed interfaces, responsive grids, and modern clean layouts.",
    tag: "UI Architecture"
  },
  {
    step: "06",
    title: "Version Control Discipline with Git & GitHub",
    period: "Ongoing",
    description: "Practicing Git commands, branching, pull requests, semantic commits, and collaborating on open repositories.",
    tag: "Version Control"
  },
  {
    step: "07",
    title: "Exploring Next.js & Full-Stack Principles",
    period: "Semester 6 (Current)",
    description: "Currently learning Next.js App Router, server-rendered components, and full-stack concepts while building portfolio projects.",
    tag: "Current Focus"
  },
  {
    step: "08",
    title: "Internship & Junior Developer Goals",
    period: "Next Step",
    description: "Actively seeking opportunities to join a professional engineering team, contribute to production applications, and learn from experienced mentors.",
    tag: "Target Milestone"
  }
];
