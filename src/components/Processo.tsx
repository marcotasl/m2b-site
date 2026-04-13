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
    <section id="processo" className="relative py-20 lg:py-28 bg-off-white">
      <div className="container-site">
        <div className="max-w-2xl mb-12 lg:mb-16" data-anim="fade-up">
          <p className="eyebrow text-orange mb-5">Como trabalhamos</p>
          <h2 className="h2 text-navy">
            Um processo técnico, previsível e <span className="text-orange">sem retrabalho</span>.
          </h2>
        </div>

        <div data-stagger="true" className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="h-full card-lift rounded-2xl bg-white border border-navy/10 p-6 lg:p-7 hover:border-orange/50">
                <div className="flex items-start justify-between mb-5">
                  <span className="stat text-orange">{s.n}</span>
                  {i < steps.length - 1 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy/20 mt-2 hidden lg:block">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <h3 className="h3 text-navy mb-2.5">{s.t}</h3>
                <p className="text-navy/65 text-[14px] leading-[1.55]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
