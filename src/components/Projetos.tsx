import Image from "next/image";
import { Building2, Hospital, Home, ImageIcon, type LucideIcon } from "lucide-react";

type Projeto = {
  tipo: string;
  metric: string;
  metricLabel: string;
  d: string;
  /** Slot opcional — caminho da imagem em /public/projetos/. Se ausente, usa fallback. */
  image?: string;
  /** Alt text da imagem (obrigatório quando image está presente). */
  imageAlt?: string;
  /** Ícone do lucide usado no fallback e no badge. */
  Icon: LucideIcon;
  /** Gradiente de fallback quando não há imagem. */
  fallbackGradient: string;
};

const projetos: Projeto[] = [
  {
    tipo: "Edifício Comercial X",
    metric: "-75%",
    metricLabel: "interferências",
    d: "Redução de 75% nas interferências em obra e entrega 10% antes do prazo planejado.",
    Icon: Building2,
    fallbackGradient: "from-[#2a3560] via-[#212741] to-[#0f1326]",
  },
  {
    tipo: "Hospital Y",
    metric: "100%",
    metricLabel: "MEP compatibilizado",
    d: "Compatibilização integral MEP com aprovação do Corpo de Bombeiros sem pendências.",
    Icon: Hospital,
    fallbackGradient: "from-[#3a4070] via-[#252b4a] to-[#131733]",
  },
  {
    tipo: "Condomínio Z",
    metric: "0",
    metricLabel: "retrabalho",
    d: "Eliminação de retrabalho em campo e entrega dentro do prazo planejado da construtora.",
    Icon: Home,
    fallbackGradient: "from-[#2d3a63] via-[#1e2444] to-[#0e1225]",
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
          {projetos.map(({ tipo, metric, metricLabel, d, image, imageAlt, Icon, fallbackGradient }) => (
            <article
              key={tipo}
              className="group card-lift relative overflow-hidden rounded-2xl bg-navy text-white flex flex-col"
            >
              {/* Slot de imagem */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {image ? (
                  <Image
                    src={image}
                    alt={imageAlt ?? tipo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center gap-3`}
                    role="img"
                    aria-label="Espaço reservado para imagem do projeto"
                  >
                    <div className="w-16 h-16 rounded-xl border-2 border-dashed border-white/25 flex items-center justify-center text-white/45 transition-all duration-500 group-hover:border-white/40 group-hover:text-white/60">
                      <ImageIcon size={28} strokeWidth={1.5} aria-hidden />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-medium">
                      Imagem do projeto
                    </span>
                  </div>
                )}
                {/* Gradient overlay para legibilidade do metric no hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"
                  aria-hidden
                />
                {/* Metric sobreposto — canto inferior esquerdo */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="display text-orange leading-none">{metric}</div>
                    <div className="mt-1 text-white/75 text-[11px] tracking-[0.18em] uppercase">
                      {metricLabel}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white/80">
                    <Icon size={18} strokeWidth={1.75} aria-hidden />
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-7 lg:p-8 flex-1 flex flex-col">
                <h3 className="h3 text-white">{tipo}</h3>
                <p className="mt-3 text-white/70 text-[15px] leading-[1.6]">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
