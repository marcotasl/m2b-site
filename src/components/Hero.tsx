export default function Hero() {
  return (
    <section id="top" className="relative bg-navy overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36">
      {/* Pattern de fundo com monograma M2B */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundSize: "720px auto",
          backgroundRepeat: "repeat",
          transform: "rotate(-18deg) scale(1.4)",
          transformOrigin: "center",
        }}
        aria-hidden
      />
      {/* Glow laranja */}
      <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-orange/20 blur-[140px] pointer-events-none" aria-hidden />

      <div className="container-site relative">
        <div className="max-w-4xl">
          <p className="text-orange font-medium tracking-[0.25em] uppercase text-xs lg:text-sm mb-6">
            29 anos de engenharia de instalações
          </p>

          <h1 className="h-display text-white text-[44px] sm:text-6xl lg:text-[96px] leading-[0.88] tracking-tight">
            Projetos de <span className="text-orange">instalações prediais</span> com alto desempenho e confiabilidade.
          </h1>

          <p className="mt-8 text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Total experiência em tecnologia <strong className="text-white font-medium">BIM</strong> para entregar obras seguras, eficientes e sem retrabalho.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-bright px-8 py-4 text-white font-medium tracking-wide transition-colors"
            >
              Solicitar Orçamento
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white px-8 py-4 text-white font-medium tracking-wide transition-colors"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-white/10 pt-12">
          {[
            { n: "29", l: "anos de atuação" },
            { n: "100%", l: "projetos em BIM" },
            { n: "8", l: "disciplinas integradas" },
            { n: "BR", l: "atendimento nacional" },
          ].map((s) => (
            <div key={s.l}>
              <div className="h-display text-orange text-5xl lg:text-6xl">{s.n}</div>
              <div className="mt-2 text-white/60 text-sm lg:text-base">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
