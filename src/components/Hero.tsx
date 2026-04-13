export default function Hero() {
  return (
    <section id="top" className="relative bg-navy overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Pattern de fundo com monograma M2B */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundSize: "640px auto",
          backgroundRepeat: "repeat",
          transform: "rotate(-18deg) scale(1.4)",
          transformOrigin: "center",
        }}
        aria-hidden
      />
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-orange/20 blur-[140px] pointer-events-none" aria-hidden />

      <div className="container-site relative">
        <div className="max-w-3xl">
          <p className="eyebrow text-orange mb-6">29 anos de engenharia de instalações</p>

          <h1 className="h1 text-white">
            Projetos de <span className="text-orange">instalações prediais</span> com alto desempenho e confiabilidade.
          </h1>

          <p className="lead mt-7 text-white/75 max-w-2xl">
            Total experiência em tecnologia <strong className="text-white font-medium">BIM</strong> para entregar obras seguras, eficientes e sem retrabalho.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-bright px-7 py-3.5 text-white text-[15px] font-medium tracking-wide transition-colors"
            >
              Solicitar Orçamento
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white px-7 py-3.5 text-white text-[15px] font-medium tracking-wide transition-colors"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { n: "29", l: "anos de atuação" },
            { n: "100%", l: "projetos em BIM" },
            { n: "8", l: "disciplinas integradas" },
            { n: "BR", l: "atendimento nacional" },
          ].map((s) => (
            <div key={s.l}>
              <div className="stat text-orange">{s.n}</div>
              <div className="mt-2 text-white/60 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
