import {
  Droplets,
  Waves,
  Bath,
  CloudRain,
  Flame,
  ShieldAlert,
  Thermometer,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

type Disciplina = {
  t: string;
  d: string;
  Icon: LucideIcon;
};

const disciplinas: Disciplina[] = [
  {
    t: "Hidráulica",
    d: "Redes dimensionadas para eficiência, durabilidade e manutenção simplificada.",
    Icon: Droplets,
  },
  {
    t: "Piscinas",
    d: "Piscinas, espelhos d'água, cascatas, fontes, brinquedos aquáticos, aquecimento e tratamento.",
    Icon: Waves,
  },
  {
    t: "Sanitário",
    d: "Sistemas de coleta e esgotamento dimensionados e totalmente inspecionáveis.",
    Icon: Bath,
  },
  {
    t: "Pluvial",
    d: "Captação, drenagem superficial, de cortinas e de lençol freático para máxima proteção.",
    Icon: CloudRain,
  },
  {
    t: "Gás Predial",
    d: "Distribuição segura e normatizada para GLP e Gás Natural.",
    Icon: Flame,
  },
  {
    t: "Prevenção e Combate a Incêndio",
    d: "PPCI e sistemas completos para aprovação no Corpo de Bombeiros e projetos executivos.",
    Icon: ShieldAlert,
  },
  {
    t: "Aquecimento Coletivo",
    d: "Soluções de alto desempenho para sistemas centralizados, direto ou indireto.",
    Icon: Thermometer,
  },
  {
    t: "Consultoria e Comissionamento",
    d: "Auditorias, testes e validação para garantir o desempenho real dos sistemas.",
    Icon: ClipboardCheck,
  },
];

export default function Disciplinas() {
  return (
    <section id="disciplinas" className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundSize: "640px auto",
          backgroundRepeat: "repeat",
          transform: "rotate(-18deg) scale(1.4)",
        }}
        aria-hidden
      />
      <div className="container-site relative">
        <div className="max-w-2xl mb-12 lg:mb-16" data-anim="fade-up">
          <p className="eyebrow text-orange mb-5">Disciplinas</p>
          <h2 className="h2 text-white">
            Soluções completas em <span className="text-orange">instalações prediais</span>.
          </h2>
        </div>

        <div data-stagger="true" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplinas.map(({ t, d, Icon }) => (
            <article
              key={t}
              className="group card-lift rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-7 hover:border-orange/60 hover:bg-white/[0.05]"
            >
              <div className="w-11 h-11 rounded-xl bg-orange/10 border border-orange/30 flex items-center justify-center text-orange mb-5 transition-colors group-hover:bg-orange group-hover:text-white group-hover:border-orange">
                <Icon
                  size={22}
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <h3 className="h3 text-white mb-2.5">{t}</h3>
              <p className="text-white/65 text-[14px] leading-[1.55]">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
