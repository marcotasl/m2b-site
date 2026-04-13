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
    <section id="projetos" className="relative py-24 lg:py-36 bg-white">
      <div className="container-site">
        <div className="max-w-3xl mb-16">
          <p className="text-orange font-medium tracking-[0.25em] uppercase text-xs mb-5">
            Projetos em destaque
          </p>
          <h2 className="h-display text-navy text-4xl lg:text-6xl">
            Obras entregues com <span className="text-orange">eficiência comprovada</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projetos.map((p) => (
            <article
              key={p.tipo}
              className="group relative overflow-hidden rounded-2xl bg-navy text-white p-8 lg:p-10 hover:bg-navy-dark transition-colors"
            >
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none group-hover:opacity-[0.1] transition-opacity"
                style={{
                  backgroundImage: "url('/m2b-monogram.svg')",
                  backgroundSize: "320px auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right -40px bottom -20px",
                  color: "#fa663c",
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="h-display text-orange text-6xl lg:text-7xl">{p.metric}</div>
                <div className="mt-1 text-white/60 text-sm tracking-wide">{p.metricLabel}</div>
                <h3 className="h-display text-white text-2xl lg:text-3xl mt-8">{p.tipo}</h3>
                <p className="mt-4 text-white/70 text-base leading-relaxed">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
