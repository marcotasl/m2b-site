import FlowLines from "./FlowLines";
import { WHATSAPP_URL } from "@/lib/contact";

export default function CTAFinal() {
  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      <FlowLines className="absolute inset-0 w-full h-full text-white/30" speed={15} pipeOpacity={0.045} flowOpacity={0.25} />
      <div
        className="absolute -top-1/3 -left-1/4 w-[120%] h-[170%] pointer-events-none"
        style={{
          backgroundImage: "url('/logos/m2b-vert-branco.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(64px)",
          opacity: 0.15,
          transform: "rotate(6deg)",
        }}
        aria-hidden
      />
      <div className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full bg-orange/20 blur-[140px] pointer-events-none" aria-hidden />

      <div className="container-site relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7" data-anim="fade-up">
          <h2 className="h2 text-white">
            Transforme seu projeto em uma <span className="text-orange">execução segura e eficiente.</span>
          </h2>
          <p className="lead mt-7 text-white/75 max-w-2xl">
            Entre em contato com nossos engenheiros e descubra como um projeto 100% BIM pode reduzir custos, prazos e riscos na sua obra.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="btn-primary group-arrow inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-bright px-7 py-3.5 text-white text-[15px] font-medium tracking-wide"
            >
              Solicitar Orçamento
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5" data-anim="scale-in">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 lg:p-8">
            <div className="eyebrow text-orange mb-4">Nossa história</div>
            <p className="text-white/75 text-[15px] leading-[1.7]">
              A M2B Projetos foi fundada em 2018, fruto de uma jornada profissional iniciada em 1996. <strong className="text-white font-medium">Marcus Marques Basílio</strong> — Arquiteto, pós-graduado em Gerenciamento de Projetos de Engenharia, especialista em Gerenciamento Ágil e Técnico em Edificações — tornou-se referência em Instalações Hidrossanitárias há mais de duas décadas.
            </p>
            <p className="mt-4 text-white/75 text-[15px] leading-[1.7]">
              Hoje a M2B integra o <strong className="text-white font-medium">Grupo Bimconnect Engenharia Integrada</strong> e atende projetos de instalações em todo o Brasil.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
