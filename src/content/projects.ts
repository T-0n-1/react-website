import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "project-placeholder-1",
    title: "Project Placeholder #1",
    description:
      "A short placeholder description for an automation or CI-focused project.",
    highlights: [
      "Highlight placeholder one",
      "Highlight placeholder two",
      "Highlight placeholder three",
    ],
    stack: ["Robot Framework", "Python", "GitHub Actions"],
    links: [{ label: "GitHub", href: "https://github.com/T-0n-1" }],
    featured: true,
  },
  {
    slug: "project-placeholder-2",
    title: "Project Placeholder #2",
    description:
      "A short placeholder description for a library or tooling project.",
    highlights: ["Highlight placeholder one", "Highlight placeholder two"],
    stack: ["Python", "Testing", "Tooling"],
    links: [{ label: "GitHub", href: "https://github.com/T-0n-1" }],
    featured: true,
  },
  {
    slug: "project-placeholder-3",
    title: "Project Placeholder #3",
    description:
      "A short placeholder description for API testing or backend work.",
    highlights: ["Highlight placeholder one", "Highlight placeholder two"],
    stack: ["TypeScript", "Node.js", "SQL"],
    links: [{ label: "GitHub", href: "https://github.com/T-0n-1" }],
    featured: true,
  },
  {
    slug: "project-placeholder-4",
    title: "Project Placeholder #4",
    description: "Optional extra placeholder project for future expansion.",
    highlights: ["Highlight placeholder one"],
    stack: ["Quality Engineering", "CI"],
    links: [{ label: "GitHub", href: "https://github.com/T-0n-1" }],
  },
];
