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
    <section className="relative py-20 lg:py-28 bg-off-white">
      <div className="container-site">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="eyebrow text-orange mb-5">Depoimentos</p>
          <h2 className="h2 text-navy">
            O que dizem quem trabalha com a <span className="text-orange">M2B</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {depoimentos.map((d) => (
            <figure
              key={d.a}
              className="rounded-2xl bg-white border border-navy/10 p-7 flex flex-col"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange mb-5">
                <path d="M7 7 H3 V11 H7 Q7 15 3 15 V17 Q11 17 11 9 V7 Z M19 7 H15 V11 H19 Q19 15 15 15 V17 Q23 17 23 9 V7 Z" />
              </svg>
              <blockquote className="text-navy/80 text-[15px] lg:text-base leading-[1.65] flex-1">
                “{d.q}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-navy/10">
                <div className="h4 text-navy">{d.a}</div>
                <div className="text-navy/55 text-[13px] mt-1">{d.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
