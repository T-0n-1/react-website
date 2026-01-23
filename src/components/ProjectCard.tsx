import type { Project } from "@/lib/types";
import { TagList } from "@/components/TagList";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:border-white/20 hover:bg-white/10">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      </div>

      <div className="relative">
        <h3 className="text-base font-semibold tracking-tight sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-neutral-300">{project.description}</p>

        <div className="mt-4">
          <TagList tags={project.stack} />
        </div>

        {project.links.length ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 transition hover:border-white/20 hover:bg-white/10"
              >
                {l.label}
                <span className="text-neutral-400">↗</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
