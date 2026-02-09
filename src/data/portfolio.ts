export interface Project {
  id: number;
  title: string;
  architecture: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const techStack = [
  { name: "React", category: "frontend", proficiency: 90, icon: "⚛️" },
  { name: "TypeScript", category: "frontend", proficiency: 85, icon: "📘" },
  { name: "Node.js", category: "backend", proficiency: 80, icon: "🟢" },
  { name: "PostgreSQL", category: "database", proficiency: 75, icon: "🐘" },
  { name: "Docker", category: "tools", proficiency: 70, icon: "🐳" },
  { name: "Git", category: "tools", proficiency: 85, icon: "📦" },
  { name: "Tailwind CSS", category: "frontend", proficiency: 95, icon: "🎨" },
  { name: "Three.js", category: "frontend", proficiency: 60, icon: "🧊" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/tofiqaskerov", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tofiq-askerov-25a384223/", icon: "linkedin" },
  { name: "Email", url: "mailto:tofiqaskerov71@gmail.com", icon: "mail" },
];

export const experiences = [
  {
    id: 1,
    type: "frontend",
    period: "2023 - Present",
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    description: "Building modern web applications with React and TypeScript.",
    highlights: ["Improved performance by 50%", "Led a team of 5 developers"],
  },
  {
    id: 2,
    type: "backend",
    period: "2021 - 2023",
    role: "Backend Developer",
    company: "Startup Inc",
    description: "Developed scalable APIs using Node.js.",
    highlights: ["Designed microservices architecture", "Reduced server costs by 30%"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    architecture: "SPA",
    description: "A modern portfolio website.",
    longDescription: "A modern portfolio website built with React, Vite, and Tailwind CSS, featuring 3D elements and smooth animations.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    architecture: "Microservices",
    description: "A full-featured e-commerce platform.",
    longDescription: "A full-featured e-commerce platform with cart and checkout, built using microservices architecture.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
];

export const typingTexts = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Engineer",
  "Creative Coder",
];
