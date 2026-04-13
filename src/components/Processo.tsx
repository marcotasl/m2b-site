const steps = [
  {
    n: "01",
    t: "Diagnóstico Técnico",
    d: "Levantamento preciso e análise normativa das condições e exigências do empreendimento.",
  },
  {
    n: "02",
    t: "Modelagem BIM",
    d: "Projetos desenvolvidos em plataforma BIM, atendendo seu nível de maturidade e requisitos.",
  },
  {
    n: "03",
    t: "Documentação Executiva",
    d: "Pranchas, memoriais e quantitativos completos, normatizados e prontos para obra.",
  },
  {
    n: "04",
    t: "Comissionamento",
    d: "Consultoria especializada para correções, testes e melhoria técnica do projeto executado.",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="relative py-24 lg:py-36 bg-off-white">
      <div className="container-site">
        <div className="max-w-3xl mb-16">
          <p className="text-orange font-medium tracking-[0.25em] uppercase text-xs mb-5">
            Como trabalhamos
          </p>
          <h2 className="h-display text-navy text-4xl lg:text-6xl">
            Um processo técnico, previsível e <span className="text-orange">sem retrabalho</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="h-full rounded-2xl bg-white border border-navy/10 p-7 lg:p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="h-display text-orange text-5xl lg:text-6xl">{s.n}</span>
                  {i < steps.length - 1 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy/20 mt-2 hidden lg:block">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <h3 className="h-display text-navy text-xl lg:text-2xl mb-3">{s.t}</h3>
                <p className="text-navy/65 text-sm leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
