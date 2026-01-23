import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TagList } from "@/components/TagList";

export default function AboutPage() {
  return (
    <Container>
      <Section
        title="About"
        subtitle="A short overview — we can expand this into a polished narrative when you want."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-neutral-200 sm:text-base">
                I work in test automation with a hands-on approach: building
                tests teams trust, improving CI feedback cycles, and keeping
                automation maintainable over time. I enjoy solving practical
                problems in tooling, frameworks, and integrations.
              </p>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-200">
                  <span className="font-semibold text-neutral-100">
                    Current:
                  </span>{" "}
                  Test Automation Consultant via Academic Work, supporting
                  DA-Group (Forssa, Finland).
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold">Skills</h3>

            <div className="mt-4 space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold text-neutral-400">
                  Test Automation
                </p>
                <TagList
                  tags={[
                    "Robot Framework",
                    "Python",
                    "Test Design",
                    "Reporting",
                  ]}
                />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold text-neutral-400">
                  CI & Tooling
                </p>
                <TagList
                  tags={["GitHub Actions", "Docker", "Automation Tooling"]}
                />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold text-neutral-400">
                  Web & Backend
                </p>
                <TagList tags={["TypeScript", "Node.js", "SQL", "HTML/CSS"]} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
