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
    title: "Portfolio",
    architecture: "Frontend",
    description: "My personal portfolio website showcasing my projects and skills.",
    longDescription: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to display my professional experience and projects.",
    techStack: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/tofiqaskerov/Portfolio",
    demoUrl: "https://tofiqaskerov.github.io/Portfolio",
  },
  {
    id: 2,
    title: "GVault",
    architecture: "Frontend",
    description: "A secure web application interface.",
    longDescription: "A frontend implementation for a secure vault application, focusing on user interface and experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/tofiqaskerov",
  },
  {
    id: 3,
    title: "ShiftFlow",
    architecture: "Backend",
    description: "Workflow management system.",
    longDescription: "A backend-focused application for managing shifts and workflows efficiently.",
    techStack: ["Java", "SQL"],
    githubUrl: "https://github.com/tofiqaskerov",
  },
  {
    id: 4,
    title: "Coffo",
    architecture: "Frontend",
    description: "Coffee shop landing page.",
    longDescription: "A clean and attractive landing page for a coffee shop, designed with modern web standards.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/tofiqaskerov/Coffo",
  },
];

export const typingTexts = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Engineer",
  "Creative Coder",
];
