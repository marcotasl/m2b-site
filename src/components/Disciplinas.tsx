const disciplinas = [
  {
    t: "Hidráulica",
    d: "Redes dimensionadas para eficiência, durabilidade e manutenção simplificada.",
    icon: (
      <path d="M8 20 V10 a4 4 0 0 1 4 -4 h8 M20 6 v14 a4 4 0 0 1 -4 4 h-4 a4 4 0 0 1 -4 -4" />
    ),
  },
  {
    t: "Piscinas",
    d: "Piscinas, espelhos d'água, cascatas, fontes, brinquedos aquáticos, aquecimento e tratamento.",
    icon: (
      <>
        <path d="M4 18 q3 -3 6 0 t6 0 t6 0" />
        <path d="M4 22 q3 -3 6 0 t6 0 t6 0" />
        <path d="M8 14 V6 M16 14 V6" />
      </>
    ),
  },
  {
    t: "Sanitário",
    d: "Sistemas de coleta e esgotamento dimensionados e totalmente inspecionáveis.",
    icon: (
      <path d="M6 4 h12 v6 a6 6 0 0 1 -6 6 a6 6 0 0 1 -6 -6 z M12 16 v6 M8 22 h8" />
    ),
  },
  {
    t: "Pluvial",
    d: "Captação, drenagem superficial, de cortinas e de lençol freático para máxima proteção.",
    icon: (
      <>
        <path d="M12 3 C8 10 6 13 6 16 a6 6 0 0 0 12 0 c0 -3 -2 -6 -6 -13 z" />
      </>
    ),
  },
  {
    t: "Gás Predial",
    d: "Distribuição segura e normatizada para GLP e Gás Natural.",
    icon: (
      <path d="M12 3 c3 5 5 7 5 11 a5 5 0 0 1 -10 0 c0 -2 1 -4 3 -5 c0 2 1 3 2 3 c0 -3 0 -5 0 -9 z" />
    ),
  },
  {
    t: "Prevenção e Combate a Incêndio",
    d: "PPCI e sistemas completos para aprovação no Corpo de Bombeiros e projetos executivos.",
    icon: (
      <>
        <path d="M12 2 c3 4 6 7 6 12 a6 6 0 0 1 -12 0 c0 -3 2 -5 3 -7 c0 2 1 3 2 3 c1 -3 1 -6 1 -8 z" />
      </>
    ),
  },
  {
    t: "Aquecimento Coletivo",
    d: "Soluções de alto desempenho para sistemas centralizados, direto ou indireto.",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2 v3 M12 19 v3 M2 12 h3 M19 12 h3 M5 5 l2 2 M17 17 l2 2 M5 19 l2 -2 M17 7 l2 -2" />
      </>
    ),
  },
  {
    t: "Consultoria e Comissionamento",
    d: "Auditorias, testes e validação para garantir o desempenho real dos sistemas.",
    icon: (
      <>
        <path d="M9 12 l2 2 l4 -4" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
];

export default function Disciplinas() {
  return (
    <section id="disciplinas" className="relative py-24 lg:py-36 bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundSize: "720px auto",
          backgroundRepeat: "repeat",
          transform: "rotate(-18deg) scale(1.4)",
        }}
        aria-hidden
      />
      <div className="container-site relative">
        <div className="max-w-3xl mb-16">
          <p className="text-orange font-medium tracking-[0.25em] uppercase text-xs mb-5">
            Disciplinas
          </p>
          <h2 className="h-display text-white text-4xl lg:text-6xl">
            Soluções completas em <span className="text-orange">instalações prediais</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplinas.map((d) => (
            <article
              key={d.t}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-orange/60 hover:bg-white/[0.05] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/30 flex items-center justify-center text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {d.icon}
                </svg>
              </div>
              <h3 className="h-display text-white text-xl lg:text-2xl mb-3">{d.t}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{d.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
