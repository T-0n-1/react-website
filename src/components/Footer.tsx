import { Container } from "@/components/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-400">© {year} Toni Mertanen</p>
          <div className="flex flex-wrap gap-3">
            <a
              className="text-sm text-neutral-300 hover:text-neutral-100"
              href="https://github.com/T-0n-1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-sm text-neutral-300 hover:text-neutral-100"
              href="https://www.linkedin.com/in/toni-mertanen"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-sm text-neutral-300 hover:text-neutral-100"
              href="/"
            >
              tonimertanen.fi
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
