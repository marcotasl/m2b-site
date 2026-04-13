"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#disciplinas", label: "Disciplinas" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-20">
        <a href="#top" aria-label="M2B — Início">
          <Logo variant="light" height={32} />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-orange text-[14px] font-medium tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="btn-primary ml-2 inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-bright px-5 py-2.5 text-white text-[14px] font-medium tracking-wide"
          >
            Solicitar Orçamento
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container-site py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-orange text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-bright px-5 py-3 text-white font-medium"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
