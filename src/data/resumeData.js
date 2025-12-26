const resumeData = {
  personal: {
    name: "Dhanush TP",
    title: "Fullstack Developer",
    location: "Coimbatore, India",
    phone: "+91 8220586721",
    email: "dhanushtheijas08@gmail.com",
    github: "github.com/dhanushtheijas08",
    linkedin: "https://www.linkedin.com/in/dhanush-theijas-tp/",
  },

  summary:
    "SDE-1 with hands-on experience building scalable web applications using React, Next.js, and Node.js. Strong understanding of system design fundamentals, clean architecture, and performance optimization. Passionate about writing maintainable code and learning through real-world projects.",

  skills: [
    {
      label: "Languages",
      values: ["TypeScript", "JavaScript"],
    },
    {
      label: "Frontend",
      values: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      label: "Backend",
      values: ["Node.js", "Express", "Firebase"],
    },
    {
      label: "Database",
      values: ["PostgreSQL", "MongoDB", "Firestore"],
    },
    {
      label: "Tools",
      values: ["Git", "Docker"],
    },
    // {
    //   label: "Concepts",
    //   values: ["REST APIs", "System Design Basics"],
    // },
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "Velam AI",
      location: "Salem",
      duration: "Mar 2025 - Present",
      points: [
        "Worked on the PitchMe learning platform, enabling users to upload or record videos for presentation practice.",
        "Built and maintained scalable frontend features using Next.js and Tailwind CSS, focusing on performance and usability.",
        "Integrated Firebase for authentication, media handling, and real-time data synchronization while collaborating with AI-powered workflows.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Velam AI",
      location: "Salem",
      duration: "Sep 2024 - Feb 2025",
      points: [
        "Contributed to a one-to-one consultant booking application, allowing users to schedule meetings based on available time slots.",
        "Developed responsive and reusable UI components using Next.js and Tailwind CSS for booking and scheduling flows.",
        "Built admin-side features to manage users, meetings, and slot availability with Firebase integration.",
      ],
    },
  ],

  projects: [
    {
      title: "Resume Builder Application",
      year: "2025",
      points: [
        "Built a full-stack resume generator with Next.js and Prisma that allows users to customize and download resumes as PDF in real time.",
        "Implemented dynamic form state, preview updates, and responsive design using Next.js, Tailwind CSS, React Redux, and Zod for validation.",
        "Tech Stack: Next.js, TypeScript, Prisma, MongoDB, Tailwind CSS, Puppeteer.",
      ],
      repo: "https://github.com/dhanushtheijas08/resume-builder",
    },
    {
      title: "Auth API with Node, Express & Prisma",
      year: "2025",
      points: [
        "Created a full authentication system with Node.js, Express, and Prisma supporting secure login, access tokens, and refresh token flows.",
        "Implemented rate limiting, token issuance & rotation, and token validation middleware for enhanced security.",
        "Tech Stack: Node.js, Express, Prisma, PostgreSQL (or database), JWT, rate-limiting middleware.",
      ],
      repo: "https://github.com/dhanushtheijas08/auth-node",
    },
  ],

  education: {
    degree: "Bachelor of Computer Science",
    duration: "2021 - 2025",
    institution: "KPR Institute of Engineering and Technology",
  },
};

export default resumeData;

