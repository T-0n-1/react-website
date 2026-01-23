export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
};
