import { Github, Gitlab, Linkedin, Mail } from "lucide-react";
import { Project, Experience, Skill, SocialLink } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    duration: "2022 - Present",
    description: [
      "Led development of responsive web applications serving 100k+ users",
      "Implemented modern React patterns and TypeScript for improved code quality",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with design team to create pixel-perfect UI implementations",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "2",
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Developed and maintained multiple client projects using modern web technologies",
      "Built RESTful APIs and integrated third-party services",
      "Optimized application performance and implemented best practices",
      "Worked in agile environment with cross-functional teams",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS"],
  },
  {
    id: "3",
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: [
      "Built responsive web applications from scratch",
      "Implemented user interfaces based on Figma designs",
      "Collaborated with backend developers for API integration",
      "Participated in product planning and feature development",
    ],
    technologies: ["React", "JavaScript", "SCSS", "Redux", "Jest"],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Vue.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Webpack", level: 80, category: "tools" },

  // Design
  { name: "Figma", level: 85, category: "design" },
  { name: "Adobe XD", level: 75, category: "design" },
  { name: "UI/UX Design", level: 80, category: "design" },
];

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: Gitlab,
    href: "https://gitlab.com/",
    label: "GitLab",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:test@gmail.com", label: "Email" },
];
