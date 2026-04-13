"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
  /** Velocidade do fluxo (duração em segundos). Menor = mais rápido. */
  speed?: number;
  /** Opacidade da malha de dutos. */
  pipeOpacity?: number;
  /** Opacidade das linhas laranja que fluem. */
  flowOpacity?: number;
};

/**
 * Camada decorativa de fundo: dutos com linhas laranja animadas.
 * Renderiza uma versão horizontal em desktop (≥768px) e uma vertical
 * em mobile — garante que o pattern fique visível em qualquer viewport.
 * Anima via stroke-dashoffset (CSS) — respeita prefers-reduced-motion.
 */
export default function FlowLines({
  className = "",
  speed = 14,
  pipeOpacity = 0.22,
  flowOpacity = 0.75,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const common = {
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths = isMobile
    ? // viewBox 400x900 — paths dominantes verticais com curvas
      [
        "M 40 -20 V 140 Q 40 180 80 180 H 220 Q 260 180 260 220 V 420 Q 260 460 220 460 H 120 Q 80 460 80 500 V 700 Q 80 740 120 740 H 340 Q 380 740 380 780 V 960",
        "M 120 -20 V 60 Q 120 100 160 100 H 340 Q 380 100 380 140 V 340 Q 380 380 340 380 H 160 Q 120 380 120 420 V 620 Q 120 660 160 660 H 260 Q 300 660 300 700 V 960",
        "M 300 -20 V 240 Q 300 280 260 280 H 140 Q 100 280 100 320 V 540 Q 100 580 140 580 H 340 Q 380 580 380 620 V 820 Q 380 860 340 860 H 80 Q 40 860 40 900 V 960",
      ]
    : // viewBox 1600x900 — paths horizontais ricos para desktop
      [
        "M -40 180 H 420 Q 460 180 460 220 V 520 Q 460 560 500 560 H 900 Q 940 560 940 520 V 300 Q 940 260 980 260 H 1640",
        "M -40 420 H 200 Q 240 420 240 460 V 740 Q 240 780 280 780 H 720 Q 760 780 760 740 V 660 Q 760 620 800 620 H 1200 Q 1240 620 1240 580 V 360 Q 1240 320 1280 320 H 1640",
        "M -40 680 H 120 Q 160 680 160 640 V 340 Q 160 300 200 300 H 560 Q 600 300 600 260 V 140 Q 600 100 640 100 H 1100 Q 1140 100 1140 140 V 420 Q 1140 460 1180 460 H 1640",
        "M -40 80 H 340 Q 380 80 380 120 V 260 Q 380 300 420 300 H 720 Q 760 300 760 340 V 480 Q 760 520 800 520 H 1040 Q 1080 520 1080 560 V 820 Q 1080 860 1120 860 H 1640",
      ];

  const viewBox = isMobile ? "0 0 400 900" : "0 0 1600 900";
  const dashes = ["60 340", "50 380", "70 310", "55 360"];

  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden
    >
      {/* Dutos estáticos */}
      <g {...common} strokeWidth={isMobile ? 1.5 : 2} opacity={pipeOpacity}>
        {paths.map((d, i) => (
          <path key={`pipe-${i}`} d={d} />
        ))}
      </g>

      {/* Fluxo laranja — stroke-dashoffset animado */}
      <g
        {...common}
        stroke="#fa663c"
        strokeWidth={isMobile ? 2 : 2.5}
        opacity={flowOpacity}
      >
        {paths.map((d, i) => (
          <path
            key={`flow-${i}`}
            d={d}
            strokeDasharray={dashes[i % dashes.length]}
            className="flow-dash"
            style={{
              animationDuration: `${speed + i * 2}s`,
              animationDelay: `-${i * 3}s`,
            }}
          />
        ))}
      </g>
    </svg>
  );
}
