const depoimentos = [
  {
    q: "A equipe da M2B é parceira de longa data. Tem profissionais muito qualificados, comprometidos com os prazos pactuados, apresentam soluções eficientes e têm bastante interação com as demais disciplinas.",
    a: "Leonardo de Castro Alves",
    r: "Diretor, AORB Evolução Construtiva",
  },
  {
    q: "Quase 10 anos de parceria com a M2B e é notável a evolução e melhoria contínua. A integração técnica dos projetos em BIM agrega muito valor, trazendo maior assertividade e segurança às nossas obras.",
    a: "Dihana Tiemi Kanda",
    r: "Gerente de Produto e Projetos, Tapajós Engenharia",
  },
  {
    q: "Atrás de um grande homem, Marcus Basílio, também há uma grande Empresa — pela estrutura funcional, conhecimento técnico, responsabilidade e qualidade ao conceber, compatibilizar e acompanhar seus projetos em execução.",
    a: "Paulo D'Arienzo",
    r: "Diretor, PAR Gestão / PARARQ",
  },
];

export default function Depoimentos() {
  return (
    <section className="relative py-20 lg:py-28 bg-off-white">
      <div className="container-site">
        <div className="max-w-2xl mb-12 lg:mb-16" data-anim="fade-up">
          <p className="eyebrow text-orange mb-5">Depoimentos</p>
          <h2 className="h2 text-navy">
            O que dizem quem trabalha com a <span className="text-orange">M2B.</span>
          </h2>
        </div>

        <div data-stagger="true" className="grid md:grid-cols-3 gap-5">
          {depoimentos.map((d) => (
            <figure
              key={d.a}
              className="card-lift rounded-2xl bg-white border border-navy/10 p-7 flex flex-col hover:border-orange/40"
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
