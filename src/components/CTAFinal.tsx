export default function CTAFinal() {
  return (
    <section id="contato" className="relative py-24 lg:py-36 bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundSize: "720px auto",
          backgroundRepeat: "repeat",
          transform: "rotate(-18deg) scale(1.4)",
        }}
        aria-hidden
      />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-orange/20 blur-[140px] pointer-events-none" aria-hidden />

      <div className="container-site relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h2 className="h-display text-white text-4xl lg:text-[72px]">
            Transforme seu projeto em uma <span className="text-orange">execução segura e eficiente</span>.
          </h2>
          <p className="mt-8 text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Entre em contato com nossos engenheiros e descubra como um projeto 100% BIM pode reduzir custos, prazos e riscos na sua obra.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:contato@m2bprojetos.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Or%C3%A7amento"
              className="inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-bright px-8 py-4 text-white font-medium tracking-wide transition-colors"
            >
              Solicitar Orçamento
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 lg:p-10">
            <div className="h-display text-orange text-xl tracking-wide mb-4">Nossa história</div>
            <p className="text-white/75 text-base leading-relaxed">
              A M2B Projetos foi fundada em 2018, fruto de uma jornada profissional iniciada em 1996. <strong className="text-white font-medium">Marcus Marques Basílio</strong> — Arquiteto, pós-graduado em Gerenciamento de Projetos de Engenharia, especialista em Gerenciamento Ágil e Técnico em Edificações — tornou-se referência em Instalações Hidrossanitárias há mais de duas décadas.
            </p>
            <p className="mt-5 text-white/75 text-base leading-relaxed">
              Hoje a M2B integra o <strong className="text-white font-medium">Grupo Bimconnect Engenharia Integrada</strong> e atende projetos de instalações em todo o Brasil.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
