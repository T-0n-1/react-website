import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import Image from "next/image";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      <Container>
        <div className="py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Image: on mobile it appears first; on desktop it's on the right */}
            <div className="relative order-1 lg:order-2">
              <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm sm:aspect-[16/9] lg:aspect-square lg:max-w-none">
                <Image
                  src="/images/hero/me_b&w.png"
                  alt=""
                  fill
                  priority
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-white/10" />
              </div>
            </div>

            {/* Text */}
            <div className="order-2 lg:order-1 max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 shadow-sm backdrop-blur">
                Test Automation Specialist{" "}
                <span className="text-neutral-500">•</span> Python{" "}
                <span className="text-neutral-500">•</span> Robot Framework
              </p>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
                Building reliable automation and fast feedback for software
                teams.
              </h1>

              <p className="mt-5 text-base text-neutral-300 sm:text-lg">
                I’m a Test Automation Specialist focused on maintainable
                automated tests and CI pipelines. Currently working as a Test
                Automation Consultant via Academic Work, supporting DA-Group in
                Forssa, Finland.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
                >
                  View Projects
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-100 transition hover:border-white/20 hover:bg-white/10"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Section
          title="Highlights"
          subtitle="A quick overview of what I work on and what I enjoy building."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Test Automation",
                text: "UI/API automation, keyword-driven frameworks, and maintainable test design.",
              },
              {
                title: "Quality Engineering",
                text: "Risk-based thinking, pragmatic QA practices, and strong feedback loops.",
              },
              {
                title: "CI & Tooling",
                text: "GitHub Actions pipelines, reporting, and team-friendly automation workflows.",
              },
              {
                title: "Web & Backend",
                text: "Solid foundation in TypeScript, Node.js, SQL, and modern tooling.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
              >
                <h3 className="text-sm font-semibold text-neutral-100">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-300">{c.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Featured Projects"
          subtitle="Placeholders for now — we can replace these with real case studies as you curate them."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/projects"
              className="text-sm text-neutral-300 hover:text-neutral-100"
            >
              See all projects →
            </Link>
          </div>
        </Section>
      </Container>
    </div>
  );
}
