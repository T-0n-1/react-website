"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Container } from "@/components/Container";

type NavItem = { href: string; label: string };

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
    ],
    [],
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-neutral-100 transition group-hover:border-white/20 group-hover:bg-white/10">
              TM
            </span>
            <span className="text-sm font-semibold tracking-tight text-neutral-100">
              Toni Mertanen
            </span>
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={[
                  "rounded-lg px-3 py-2 text-sm transition",
                  isActive(i.href)
                    ? "bg-white/10 text-neutral-100"
                    : "text-neutral-300 hover:bg-white/5 hover:text-neutral-100",
                ].join(" ")}
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 transition hover:border-white/20 hover:bg-white/10 sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={["sm:hidden", open ? "block" : "hidden"].join(" ")}
        >
          <div className="pb-4">
            <nav className="grid gap-2">
              {items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition",
                    isActive(i.href)
                      ? "border-white/20 bg-white/10 text-neutral-100"
                      : "text-neutral-300 hover:border-white/20 hover:bg-white/10 hover:text-neutral-100",
                  ].join(" ")}
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
