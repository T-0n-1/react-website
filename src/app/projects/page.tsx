import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <Section
        title="Projects"
        subtitle="Selected work focused on test automation, tooling, and practical quality improvements. (Details are being curated.)"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
