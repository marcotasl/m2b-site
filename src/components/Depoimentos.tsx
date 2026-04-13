const depoimentos = [
  {
    q: "A compatibilização BIM da M2B reduziu ajustes em campo e acelerou a aprovação do projeto.",
    a: "Ana Souza",
    r: "Eng. de Obras, Construtora Alfa",
  },
  {
    q: "Entrega técnica impecável e documentação completa, facilitando a operação do empreendimento.",
    a: "Bruno Lima",
    r: "Facilities, Grupo Ômega",
  },
  {
    q: "Equipe ágil e precisa. O suporte no comissionamento fez toda a diferença.",
    a: "Carla Ribeiro",
    r: "Arquitetura, Studio CR",
  },
];

export default function Depoimentos() {
  return (
    <section className="relative py-24 lg:py-36 bg-off-white">
      <div className="container-site">
        <div className="max-w-3xl mb-16">
          <p className="text-orange font-medium tracking-[0.25em] uppercase text-xs mb-5">
            Depoimentos
          </p>
          <h2 className="h-display text-navy text-4xl lg:text-6xl">
            O que dizem quem trabalha com a <span className="text-orange">M2B</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d) => (
            <figure
              key={d.a}
              className="rounded-2xl bg-white border border-navy/10 p-8 flex flex-col"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-orange mb-5">
                <path d="M7 7 H3 V11 H7 Q7 15 3 15 V17 Q11 17 11 9 V7 Z M19 7 H15 V11 H19 Q19 15 15 15 V17 Q23 17 23 9 V7 Z" />
              </svg>
              <blockquote className="text-navy/80 text-base lg:text-lg leading-relaxed flex-1">
                “{d.q}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-navy/10">
                <div className="h-display text-navy text-lg">{d.a}</div>
                <div className="text-navy/55 text-sm mt-1">{d.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
