"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "@/lib/contact";

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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled || open
            ? "bg-navy/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-20">
          <a href="#top" aria-label="M2B — Início" className="relative z-[60]">
            <Logo
              variant="light"
              height={scrolled ? 52 : 62}
              className="transition-all duration-300"
            />
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
            className="lg:hidden relative z-[60] p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
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
      </header>

      {/* Mobile menu — fullscreen overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-50 bg-navy text-white transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ height: "100dvh" }}
        aria-hidden={!open}
      >
        {/* Logo M2B gigante desfocado como ambiência */}
        <div
          className="absolute -top-1/4 -right-1/3 w-[140%] h-[140%] pointer-events-none"
          style={{
            backgroundImage: "url('/logos/m2b-vert-branco.svg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: "blur(64px)",
            opacity: 0.18,
          }}
          aria-hidden
        />

        <div className="relative flex flex-col h-full pt-20">
          <nav className="flex-1 flex flex-col justify-center container-site gap-1 pb-8">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between py-5 border-b border-white/10 text-white hover:text-orange transition-colors"
                style={{
                  transitionDelay: open ? `${80 + i * 50}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  transitionProperty: "opacity, transform, color",
                  transitionDuration: "400ms",
                  transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)",
                }}
              >
                <span className="h2 text-[32px] leading-none">{l.label}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/40 group-hover:text-orange group-hover:translate-x-1 transition-all"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn-primary group-arrow mt-8 inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-bright px-7 py-4 text-white text-[15px] font-medium tracking-wide"
              style={{
                transitionDelay: open ? `${80 + links.length * 50}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transitionProperty: "opacity, transform, background-color",
                transitionDuration: "400ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)",
              }}
            >
              Solicitar Orçamento
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </nav>

          <div className="container-site pb-8 pt-4 border-t border-white/10">
            <p className="text-white/55 text-[13px]">
              <a href="mailto:marcus@m2bprojetos.com.br" className="hover:text-orange transition-colors">
                marcus@m2bprojetos.com.br
              </a>
            </p>
            <p className="text-white/40 text-[12px] mt-1">Atendimento em todo o Brasil</p>
          </div>
        </div>
      </div>
    </>
  );
}
