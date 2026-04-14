"use client";

import { useEffect } from "react";

/**
 * Reveal de scroll com CSS + IntersectionObserver (sem GSAP).
 *
 *   [data-anim="fade-up" | "fade-in" | "scale-in"]   → reveal ao entrar na viewport
 *   [data-stagger="true"]                             → filhos em cascata (delay via --i)
 *   [data-count-to="700"]                             → count-up (rAF) ao entrar na viewport
 *     [data-count-prefix="+"] [data-count-suffix="%"] → afixos opcionais
 *
 * Estado inicial (invisível) é aplicado só quando html.anim-ready — a classe é
 * setada via script inline no layout antes do primeiro paint. Sem JS, conteúdo
 * fica visível por padrão.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Setar --i em cada filho dos containers de stagger
    document
      .querySelectorAll<HTMLElement>('[data-stagger="true"]')
      .forEach((container) => {
        Array.from(container.children).forEach((child, i) => {
          (child as HTMLElement).style.setProperty("--i", String(i));
        });
      });

    // Reveal observer: adiciona .is-visible quando elemento entra na viewport
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealObserver.unobserve(e.target);
          }
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.05,
      },
    );

    const revealTargets = document.querySelectorAll<HTMLElement>(
      '[data-anim], [data-stagger="true"]',
    );
    revealTargets.forEach((el) => revealObserver.observe(el));

    // Count-up observer
    const countObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          countObserver.unobserve(el);
          const end = parseFloat(el.dataset.countTo ?? "0");
          const prefix = el.dataset.countPrefix ?? "";
          const suffix = el.dataset.countSuffix ?? "";
          if (prefersReducedMotion || !Number.isFinite(end)) {
            el.textContent = prefix + end + suffix;
            continue;
          }
          const duration = 1100;
          const startTime = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - t, 3); // power3.out
            el.textContent = prefix + Math.round(end * eased) + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-count-to]")
      .forEach((el) => countObserver.observe(el));

    // Safety net: se IO não disparar (raro — ex: layout com 0×0), revelar tudo
    const safety = window.setTimeout(() => {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    }, 1200);

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
