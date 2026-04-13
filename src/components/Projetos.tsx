const projetos = [
  {
    tipo: "Edifício Comercial X",
    metric: "-75%",
    metricLabel: "interferências",
    d: "Redução de 75% nas interferências em obra e entrega 10% antes do prazo planejado.",
  },
  {
    tipo: "Hospital Y",
    metric: "100%",
    metricLabel: "MEP compatibilizado",
    d: "Compatibilização integral MEP com aprovação do Corpo de Bombeiros sem pendências.",
  },
  {
    tipo: "Condomínio Z",
    metric: "0",
    metricLabel: "retrabalho",
    d: "Eliminação de retrabalho em campo e entrega dentro do prazo planejado da construtora.",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="relative py-20 lg:py-28 bg-white">
      <div className="container-site">
        <div className="max-w-2xl mb-12 lg:mb-16" data-anim="fade-up">
          <p className="eyebrow text-orange mb-5">Projetos em destaque</p>
          <h2 className="h2 text-navy">
            Obras entregues com <span className="text-orange">eficiência comprovada.</span>
          </h2>
        </div>

        <div data-stagger="true" className="grid lg:grid-cols-3 gap-5">
          {projetos.map((p) => (
            <article
              key={p.tipo}
              className="group card-lift relative overflow-hidden rounded-2xl bg-navy text-white p-7 lg:p-8 hover:bg-navy-dark"
            >
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none group-hover:opacity-[0.1] transition-opacity"
                style={{
                  backgroundImage: "url('/m2b-monogram.svg')",
                  backgroundSize: "300px auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right -30px bottom -20px",
                  color: "#fa663c",
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="display text-orange">{p.metric}</div>
                <div className="mt-1 text-white/60 text-xs tracking-wide uppercase">{p.metricLabel}</div>
                <h3 className="h3 text-white mt-7">{p.tipo}</h3>
                <p className="mt-3 text-white/70 text-[15px] leading-[1.6]">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
