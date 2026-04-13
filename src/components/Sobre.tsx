export default function Sobre() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-off-white">
      <div className="container-site grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-5" data-anim="fade-up">
          <p className="eyebrow text-orange mb-5">Sobre a M2B</p>
          <h2 className="h2 text-navy">
            Engenharia de Instalações Prediais que garantem <span className="text-orange">resultados.</span>
          </h2>
        </div>

        <div
          data-stagger="true"
          className="lg:col-span-7 space-y-5 body-md text-navy/75"
        >
          <p>
            A M2B entrega soluções completas em projetos e consultoria para instalações prediais, atuando em sistemas <strong className="text-navy font-medium">hidráulicos, piscinas, sanitários, pluviais, gás predial, aquecimento coletivo e prevenção e combate a incêndio</strong>.
          </p>
          <p>
            Todos os projetos são desenvolvidos <strong className="text-navy font-medium">100% em plataforma BIM</strong>, permitindo compatibilização precisa entre disciplinas, detecção antecipada de interferências e economia de tempo e recursos.
          </p>
          <p>
            Com uma equipe técnica sênior e mais de 30 anos de atuação, unimos conhecimento prático, domínio normativo e tecnologia de ponta para garantir obras seguras, eficientes e dentro do prazo através de soluções de projetos completas.
          </p>
        </div>
      </div>
    </section>
  );
}
