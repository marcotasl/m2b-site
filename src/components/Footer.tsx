import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12 lg:py-14">
      <div className="container-site grid md:grid-cols-2 gap-10 items-start">
        <div>
          <Logo variant="light" height={38} />
          <p className="mt-6 max-w-md text-[14px] leading-[1.65]">
            Projetos e consultoria de instalações prediais 100% em BIM.
            Integrante do Grupo Bimconnect Engenharia Integrada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 text-[14px]">
          <div>
            <div className="eyebrow text-white mb-4">Contato</div>
            <a href="mailto:contato@m2bprojetos.com.br" className="block hover:text-orange transition-colors">
              contato@m2bprojetos.com.br
            </a>
            <p className="mt-2 text-white/55">Atendimento em todo o Brasil</p>
          </div>
          <div>
            <div className="eyebrow text-white mb-4">Navegação</div>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-orange transition-colors">Sobre</a></li>
              <li><a href="#disciplinas" className="hover:text-orange transition-colors">Disciplinas</a></li>
              <li><a href="#processo" className="hover:text-orange transition-colors">Processo</a></li>
              <li><a href="#projetos" className="hover:text-orange transition-colors">Projetos</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-site mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-between gap-4 text-[12px] text-white/50">
        <span>© {new Date().getFullYear()} M2B Projetos e Consultoria. Todos os direitos reservados.</span>
        <span>CNPJ disponível sob solicitação</span>
      </div>
    </footer>
  );
}
