import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Disciplinas from "@/components/Disciplinas";
import Processo from "@/components/Processo";
import Projetos from "@/components/Projetos";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Disciplinas />
        <Processo />
        <Projetos />
        <Depoimentos />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
