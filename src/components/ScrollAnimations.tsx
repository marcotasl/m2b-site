"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Barra do browser no mobile muda o viewport — ignoramos refresh nesse evento
ScrollTrigger.config({ ignoreMobileResize: true });

/**
 * Orquestrador global de animações GSAP.
 *   [data-anim="fade-up"]        → fade + translate Y
 *   [data-anim="fade-in"]        → fade puro
 *   [data-anim="scale-in"]       → scale + fade
 *   [data-stagger="true"]        → filhos diretos entram em cascata
 *   [data-parallax="0.2"]        → parallax no scroll
 *   [data-count-to="29"]         → conta até o valor na viewport
 *   [data-count-prefix="+"]      → prefixo opcional no count-up
 *   [data-count-suffix="%"]      → sufixo opcional no count-up
 *   [data-hero-zoom="true"]      → ken burns no background do hero
 *
 * Todas animações de entrada limpam inline styles ao fim (clearProps).
 * Respeita prefers-reduced-motion.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const CLEAR = "opacity,transform,y,scale,willChange";
    // Threshold mais generoso em mobile — viewports menores fazem 85% cair muito baixo
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const startPos = isMobile ? "top 95%" : "top 88%";

    const ctx = gsap.context(() => {
      // Fade-up
      gsap.utils.toArray<HTMLElement>("[data-anim='fade-up']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 24,
          duration: 0.8,
          ease: "power3.out",
          clearProps: CLEAR,
          scrollTrigger: {
            trigger: el,
            start: startPos,
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // Fade-in
      gsap.utils.toArray<HTMLElement>("[data-anim='fade-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          clearProps: CLEAR,
          scrollTrigger: {
            trigger: el,
            start: isMobile ? "top 98%" : "top 90%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // Scale-in
      gsap.utils.toArray<HTMLElement>("[data-anim='scale-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: prefersReducedMotion ? 1 : 0.96,
          duration: 0.8,
          ease: "power3.out",
          clearProps: CLEAR,
          scrollTrigger: {
            trigger: el,
            start: startPos,
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // Stagger (containers) — ScrollTrigger.batch é mais robusto em mobile:
      // dispara por grupos conforme elementos entram na viewport, não por container
      const staggerContainers = gsap.utils.toArray<HTMLElement>(
        "[data-stagger='true']",
      );
      staggerContainers.forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        if (children.length === 0) return;

        // Set estado inicial imediato pra evitar flash
        gsap.set(children, {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 20,
        });

        ScrollTrigger.batch(children, {
          start: isMobile ? "top 98%" : "top 90%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.08,
              clearProps: CLEAR,
            });
          },
        });
      });

      // Parallax (skip em mobile pra economizar GPU)
      if (!prefersReducedMotion && !isMobile) {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax ?? "0.2");
          gsap.to(el, {
            yPercent: -100 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }

      // Count up
      gsap.utils.toArray<HTMLElement>("[data-count-to]").forEach((el) => {
        const end = parseFloat(el.dataset.countTo ?? "0");
        const suffix = el.dataset.countSuffix ?? "";
        const prefix = el.dataset.countPrefix ?? "";
        const state = { val: 0 };
        gsap.to(state, {
          val: end,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = prefix + Math.round(state.val) + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: isMobile ? "top 98%" : "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // Hero Ken Burns + parallax image (desktop only)
      if (!prefersReducedMotion && !isMobile) {
        gsap.utils
          .toArray<HTMLElement>("[data-hero-zoom='true']")
          .forEach((el) => {
            gsap.fromTo(
              el,
              { scale: 1.08 },
              { scale: 1.18, duration: 18, ease: "none" },
            );
            gsap.to(el, {
              yPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          });
      }
    });

    // Refresh em momentos críticos — garante que ScrollTrigger calcule
    // as posições corretas após images load, fonts, etc.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    // Debounced refresh on viewport orientation change (mobile rotation)
    let orientTimer: number | undefined;
    const onOrientation = () => {
      if (orientTimer) window.clearTimeout(orientTimer);
      orientTimer = window.setTimeout(refresh, 300);
    };
    window.addEventListener("orientationchange", onOrientation);

    // Safety net: se por qualquer motivo GSAP não conseguir aplicar,
    // remover opacity:0 depois de 2s pra nada ficar invisível "travado"
    const safetyTimer = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(
          "[data-anim], [data-stagger='true'] > *",
        )
        .forEach((el) => {
          if (getComputedStyle(el).opacity === "0") {
            el.style.opacity = "1";
            el.style.transform = "none";
          }
        });
    }, 2500);

    return () => {
      ctx.revert();
      window.removeEventListener("load", refresh);
      window.removeEventListener("orientationchange", onOrientation);
      window.clearTimeout(safetyTimer);
      if (orientTimer) window.clearTimeout(orientTimer);
    };
  }, []);

  return null;
}
