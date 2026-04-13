import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70 py-12 lg:py-14">
      {/* Linha principal — logo M2B em destaque + infos */}
      <div className="container-site grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 items-start">
        <div>
          <Logo variant="light" height={64} />
          <p className="mt-6 max-w-md text-[14px] leading-[1.65]">
            Projetos e consultoria de instalações prediais 100% em BIM.
          </p>
        </div>

        <div>
          <div className="eyebrow text-white mb-4">Contato</div>
          <a
            href="mailto:marcus@m2bprojetos.com.br"
            className="block text-[14px] hover:text-orange transition-colors"
          >
            marcus@m2bprojetos.com.br
          </a>
          <p className="mt-2 text-[14px] text-white/55">Atendimento em todo o Brasil</p>
        </div>

        <div>
          <div className="eyebrow text-white mb-4">Navegação</div>
          <ul className="space-y-2 text-[14px]">
            <li><a href="#sobre" className="hover:text-orange transition-colors">Sobre</a></li>
            <li><a href="#disciplinas" className="hover:text-orange transition-colors">Disciplinas</a></li>
            <li><a href="#processo" className="hover:text-orange transition-colors">Processo</a></li>
            <li><a href="#projetos" className="hover:text-orange transition-colors">Projetos</a></li>
          </ul>
        </div>
      </div>

      {/* Linha inferior — © | desenvolvido por | BIMConnect (à direita) */}
      <div className="container-site mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-[12px] text-white/50">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>© {year} M2B Projetos e Consultoria. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://virtusdesign.com.br"
              target="_blank"
              rel="noopener"
              className="text-white/75 hover:text-orange transition-colors font-medium"
            >
              Virtus Design
            </a>
          </span>
        </div>

        <div className="flex items-center gap-2.5 ml-auto">
          <span className="text-white/40 text-[11px] uppercase tracking-[0.16em]">
            Grupo
          </span>
          <a
            href="https://bimconnect.eng.br"
            target="_blank"
            rel="noopener"
            aria-label="BIMConnect Engenharia Integrada"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/logos/bimconnect-logo.svg"
              alt="BIMConnect"
              width={120}
              height={19}
              className="h-[18px] w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
