import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "M2B Projetos — Instalações prediais com alto desempenho em BIM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #212741 0%, #161b33 60%, #0f1326 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow laranja */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "rgba(250,102,60,0.32)",
            filter: "blur(140px)",
          }}
        />

        {/* Top — eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            letterSpacing: "0.24em",
            fontSize: 20,
            fontWeight: 500,
            color: "#fa663c",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#fa663c",
            }}
          />
          30 anos de engenharia
        </div>

        {/* Middle — headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          <span>Projetos de</span>
          <span style={{ color: "#fa663c" }}>instalações prediais</span>
          <span>em BIM.</span>
        </div>

        {/* Bottom — M2B logo + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {/* Logo M2B estilizado */}
          <svg
            width="340"
            height="60"
            viewBox="0 0 646 165"
            fill="#fa663c"
          >
            <path d="M327.731 51.3899H320.466L319.092 50.0348V42.845L320.466 41.4899H327.731L329.105 42.845V50.0348L327.731 51.3899Z M320.616 42.8638V50.016H327.599V42.8638H320.616Z" />
            <text
              x="0"
              y="120"
              fontSize="120"
              fontWeight="600"
              fontFamily="system-ui"
              fill="#fa663c"
            >
              M2B
            </text>
          </svg>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <span>m2bprojetos.com.br</span>
            <span style={{ fontSize: 16, letterSpacing: "0.22em", marginTop: 6, textTransform: "uppercase" }}>
              Projetos e Consultoria
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
