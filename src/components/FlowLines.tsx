type Props = {
  className?: string;
  /** Velocidade do fluxo (duração em segundos). Menor = mais rápido. */
  speed?: number;
  /** Opacidade da malha de dutos (cinza sutil). */
  pipeOpacity?: number;
  /** Opacidade das linhas laranja que fluem. */
  flowOpacity?: number;
};

/**
 * Camada decorativa de fundo: dutos (pipes) com linhas laranja
 * animadas fluindo por dentro — evoca instalações hidráulicas/gás da M2B.
 *
 * Anima via stroke-dashoffset (CSS puro).
 * Respeita prefers-reduced-motion.
 */
export default function FlowLines({
  className = "",
  speed = 14,
  pipeOpacity = 0.22,
  flowOpacity = 0.75,
}: Props) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden
    >
      <defs>
        {/* Glow suave no fluxo */}
        <filter id="flow-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dutos estáticos (traço fino, cor neutra clara) */}
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={pipeOpacity}
      >
        <path d="M -40 180 H 420 Q 460 180 460 220 V 520 Q 460 560 500 560 H 900 Q 940 560 940 520 V 300 Q 940 260 980 260 H 1640" />
        <path d="M -40 420 H 200 Q 240 420 240 460 V 740 Q 240 780 280 780 H 720 Q 760 780 760 740 V 660 Q 760 620 800 620 H 1200 Q 1240 620 1240 580 V 360 Q 1240 320 1280 320 H 1640" />
        <path d="M -40 680 H 120 Q 160 680 160 640 V 340 Q 160 300 200 300 H 560 Q 600 300 600 260 V 140 Q 600 100 640 100 H 1100 Q 1140 100 1140 140 V 420 Q 1140 460 1180 460 H 1640" />
        <path d="M -40 80 H 340 Q 380 80 380 120 V 260 Q 380 300 420 300 H 720 Q 760 300 760 340 V 480 Q 760 520 800 520 H 1040 Q 1080 520 1080 560 V 820 Q 1080 860 1120 860 H 1640" />

        {/* Junções (círculos nos pontos de conexão) */}
        <circle cx="460" cy="220" r="4" fill="currentColor" stroke="none" />
        <circle cx="940" cy="300" r="4" fill="currentColor" stroke="none" />
        <circle cx="240" cy="460" r="4" fill="currentColor" stroke="none" />
        <circle cx="760" cy="660" r="4" fill="currentColor" stroke="none" />
        <circle cx="600" cy="260" r="4" fill="currentColor" stroke="none" />
        <circle cx="1140" cy="140" r="4" fill="currentColor" stroke="none" />
        <circle cx="380" cy="120" r="4" fill="currentColor" stroke="none" />
        <circle cx="760" cy="340" r="4" fill="currentColor" stroke="none" />
        <circle cx="1080" cy="560" r="4" fill="currentColor" stroke="none" />
      </g>

      {/* Fluxo laranja — cada duto com sua linha tracejada animada */}
      <g
        stroke="#fa663c"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={flowOpacity}
        filter="url(#flow-glow)"
      >
        <path
          d="M -40 180 H 420 Q 460 180 460 220 V 520 Q 460 560 500 560 H 900 Q 940 560 940 520 V 300 Q 940 260 980 260 H 1640"
          strokeDasharray="60 340"
          className="flow-dash"
          style={{ animationDuration: `${speed}s` }}
        />
        <path
          d="M -40 420 H 200 Q 240 420 240 460 V 740 Q 240 780 280 780 H 720 Q 760 780 760 740 V 660 Q 760 620 800 620 H 1200 Q 1240 620 1240 580 V 360 Q 1240 320 1280 320 H 1640"
          strokeDasharray="50 380"
          className="flow-dash"
          style={{ animationDuration: `${speed + 4}s`, animationDelay: "-2s" }}
        />
        <path
          d="M -40 680 H 120 Q 160 680 160 640 V 340 Q 160 300 200 300 H 560 Q 600 300 600 260 V 140 Q 600 100 640 100 H 1100 Q 1140 100 1140 140 V 420 Q 1140 460 1180 460 H 1640"
          strokeDasharray="70 310"
          className="flow-dash"
          style={{ animationDuration: `${speed + 2}s`, animationDelay: "-5s" }}
        />
        <path
          d="M -40 80 H 340 Q 380 80 380 120 V 260 Q 380 300 420 300 H 720 Q 760 300 760 340 V 480 Q 760 520 800 520 H 1040 Q 1080 520 1080 560 V 820 Q 1080 860 1120 860 H 1640"
          strokeDasharray="55 360"
          className="flow-dash"
          style={{ animationDuration: `${speed + 6}s`, animationDelay: "-8s" }}
        />
      </g>
    </svg>
  );
}
