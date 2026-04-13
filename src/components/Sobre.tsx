export default function Sobre() {
  return (
    <section id="sobre" className="relative py-24 lg:py-36 bg-off-white">
      <div className="container-site grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="text-orange font-medium tracking-[0.25em] uppercase text-xs mb-5">
            Sobre a M2B
          </p>
          <h2 className="h-display text-navy text-4xl lg:text-6xl">
            Engenharia de instalações que garante <span className="text-orange">resultados</span>.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-navy/80 text-lg leading-relaxed">
          <p>
            A M2B entrega soluções completas em projetos e consultoria de instalações prediais, atuando em sistemas <strong className="text-navy">hidráulicos, piscinas, sanitários, pluviais, gás predial, aquecimento coletivo e prevenção e combate a incêndio</strong>.
          </p>
          <p>
            Todos os projetos são desenvolvidos <strong className="text-navy">100% em plataforma BIM</strong>, permitindo compatibilização precisa entre disciplinas, detecção antecipada de interferências e economia de tempo e recursos.
          </p>
          <p>
            Com equipe técnica sênior e mais de 29 anos de atuação, unimos conhecimento prático, domínio normativo e tecnologia de ponta para garantir obras seguras, eficientes e dentro do prazo.
          </p>
        </div>
      </div>
    </section>
  );
}
