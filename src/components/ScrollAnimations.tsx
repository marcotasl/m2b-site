"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Orquestrador global de animações GSAP.
 * Aplica efeitos a elementos marcados com:
 *   [data-anim="fade-up"]        → fade + translate Y
 *   [data-anim="fade-in"]        → fade puro
 *   [data-anim="scale-in"]       → scale + fade
 *   [data-stagger="true"]        → filhos diretos entram em cascata
 *   [data-parallax="0.2"]        → parallax no scroll (valor = velocidade)
 *   [data-count-to="29"]         → conta até o valor quando entra na viewport
 *   [data-hero-zoom="true"]      → ken burns no background do hero
 *
 * Todas as animações de entrada usam `clearProps` no fim — o GSAP remove
 * os inline styles para que CSS (ex: hover, layout) volte a mandar.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const CLEAR = "opacity,transform,y,scale,willChange";

    const ctx = gsap.context(() => {
      // Fade-up
      gsap.utils.toArray<HTMLElement>("[data-anim='fade-up']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 28,
          duration: 0.9,
          ease: "power3.out",
          clearProps: CLEAR,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // Fade-in
      gsap.utils.toArray<HTMLElement>("[data-anim='fade-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          clearProps: CLEAR,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // Scale-in
      gsap.utils.toArray<HTMLElement>("[data-anim='scale-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: prefersReducedMotion ? 1 : 0.94,
          duration: 0.9,
          ease: "power3.out",
          clearProps: CLEAR,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // Stagger (containers) — cria uma timeline por container para que o
      // clearProps execute em TODOS os filhos ao final, prevenindo inline
      // styles residuais que bagunçam alinhamento / hover
      gsap.utils.toArray<HTMLElement>("[data-stagger='true']").forEach((el) => {
        const children = Array.from(el.children) as HTMLElement[];
        gsap.from(children, {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 24,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: CLEAR,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Parallax
      if (!prefersReducedMotion) {
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
        const state = { val: 0 };
        gsap.to(state, {
          val: end,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(state.val) + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // Hero Ken Burns
      if (!prefersReducedMotion) {
        gsap.utils
          .toArray<HTMLElement>("[data-hero-zoom='true']")
          .forEach((el) => {
            gsap.fromTo(
              el,
              { scale: 1.08 },
              {
                scale: 1.18,
                duration: 18,
                ease: "none",
              },
            );
            // parallax do hero image
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

    // Force refresh after images load
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}
