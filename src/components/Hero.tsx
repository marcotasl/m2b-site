import Image from "next/image";
import FlowLines from "./FlowLines";

type Variant = "a" | "b";

export default function Hero({ variant = "a" }: { variant?: Variant }) {
  const heroSrc = variant === "b" ? "/hero/hero-b.jpg" : "/hero/hero-a.jpg";

  return (
    <section id="top" className="relative bg-navy overflow-hidden">
      {/* Imagem de fundo com Ken Burns + parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div data-hero-zoom="true" className="absolute inset-0">
          <Image
            src={heroSrc}
            alt="Obra em construção com sobreposição BIM das instalações prediais"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(33,39,65,0.92) 0%, rgba(33,39,65,0.78) 35%, rgba(33,39,65,0.35) 60%, rgba(33,39,65,0.15) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy to-transparent"
          aria-hidden
        />
        <FlowLines
          className="absolute inset-0 w-full h-full text-white/25 mix-blend-screen"
          speed={18}
          pipeOpacity={0.03}
          flowOpacity={0.18}
        />
      </div>

      <div className="container-site relative pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-3xl">
          <p
            data-anim="fade-up"
            className="eyebrow text-orange mb-6 inline-flex items-center gap-2"
          >
            <span className="relative inline-flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-orange animate-pulse-dot" />
              <span className="absolute inset-0 rounded-full bg-orange" />
            </span>
            29 anos de engenharia de instalações
          </p>

          <h1 data-anim="fade-up" className="h1 text-white">
            Projetos de <span className="text-orange">instalações prediais</span> com alto desempenho e confiabilidade.
          </h1>

          <p data-anim="fade-up" className="lead mt-7 text-white/80 max-w-2xl">
            Total experiência em tecnologia <strong className="text-white font-medium">BIM</strong> para entregar obras seguras, eficientes e sem retrabalho.
          </p>

          <div data-anim="fade-up" className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="btn-primary group-arrow inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-bright px-7 py-3.5 text-white text-[15px] font-medium tracking-wide"
            >
              Solicitar Orçamento
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#projetos"
              className="group-arrow inline-flex items-center justify-center rounded-full border border-white/40 hover:border-white hover:bg-white/5 backdrop-blur-sm px-7 py-3.5 text-white text-[15px] font-medium tracking-wide transition-colors"
            >
              Ver Projetos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats com stagger + count-up */}
        <div
          data-stagger="true"
          className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/15 pt-10"
        >
          {[
            { n: 29, suffix: "", l: "anos de atuação" },
            { n: 100, suffix: "%", l: "projetos em BIM" },
            { n: 8, suffix: "", l: "disciplinas integradas" },
            { n: null, label: "BR", l: "atendimento nacional" },
          ].map((s, i) => (
            <div key={i}>
              <div className="stat text-orange">
                {s.n === null ? (
                  s.label
                ) : (
                  <span data-count-to={s.n} data-count-suffix={s.suffix}>
                    0{s.suffix}
                  </span>
                )}
              </div>
              <div className="mt-2 text-white/70 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#sobre"
        aria-label="Rolar para próxima seção"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
      >
        <span className="eyebrow text-[10px]">Descer</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-bounce-y"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
