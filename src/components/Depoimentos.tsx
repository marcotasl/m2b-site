import Image from "next/image";
import { Quote } from "lucide-react";

type Depoimento = {
  /** Render do corpo do depoimento (já com o highlight laranja embutido). */
  q: React.ReactNode;
  a: string;
  r: string;
  /** Caminho do logo da empresa em /public/depoimentos-logos/. Se ausente, renderiza fallback com sigla. */
  logo?: string;
  /** Nome curto da empresa para alt text e fallback. */
  empresa: string;
};

const hl = (text: string) => <span className="text-orange font-medium">{text}</span>;

const depoimentos: Depoimento[] = [
  {
    q: (
      <>
        Atrás de um grande homem, Marcus Basílio, também há uma {hl("grande Empresa")} — pela
        estrutura funcional, conhecimento técnico, responsabilidade e qualidade ao conceber,
        compatibilizar e acompanhar seus projetos em execução.
      </>
    ),
    a: "Paulo D'Arienzo",
    r: "Diretor, PAR Gestão",
    empresa: "PAR Gestão",
    logo: "/depoimentos-logos/par.png",
  },
  {
    q: (
      <>
        Quase 10 anos de parceria com a M2B e é notável a evolução e melhoria contínua. A{" "}
        {hl("integração técnica dos projetos em BIM")} agrega muito valor, trazendo maior
        assertividade e segurança às nossas obras.
      </>
    ),
    a: "Dihana T. Kanda",
    r: "Gerente de Produto e Projetos, Tapajós Engenharia",
    empresa: "Tapajós Engenharia",
    logo: "/depoimentos-logos/tapajos-v2.png",
  },
  {
    q: (
      <>
        A equipe da M2B é parceira de longa data. Tem profissionais muito qualificados,{" "}
        {hl("comprometidos com os prazos pactuados,")} apresentam soluções eficientes e têm
        bastante interação com as demais disciplinas.
      </>
    ),
    a: "Leonardo de Castro Alves",
    r: "Diretor, AORB Evolução Construtiva",
    empresa: "AORB",
    logo: "/depoimentos-logos/aorb.png",
  },
];

function LogoFallback({ sigla }: { sigla: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy/5 border border-navy/10">
      <span className="font-display font-medium text-navy text-[13px] tracking-[0.18em]">
        {sigla}
      </span>
    </div>
  );
}

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
          {depoimentos.map(({ q, a, r, logo, empresa }) => (
            <figure
              key={a}
              className="card-lift rounded-2xl bg-white border border-navy/10 p-7 flex flex-col hover:border-orange/40"
            >
              <Quote
                size={26}
                strokeWidth={1.75}
                className="text-orange mb-5 -scale-x-100"
                aria-hidden
              />
              <blockquote className="text-navy/80 text-[15px] lg:text-base leading-[1.65] flex-1">
                <span className="text-orange/70">“</span>
                {q}
                <span className="text-orange/70">”</span>
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-navy/10 flex flex-col">
                <div className="h4 text-navy line-clamp-1">{a}</div>
                <div className="text-navy/55 text-[13px] mt-1 line-clamp-2 min-h-[2.8em]">{r}</div>
                <div className="mt-4 h-8 flex items-center">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={empresa}
                      width={160}
                      height={32}
                      className="h-7 w-auto max-w-[140px] opacity-80 object-contain object-left"
                    />
                  ) : (
                    <LogoFallback sigla={empresa} />
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
