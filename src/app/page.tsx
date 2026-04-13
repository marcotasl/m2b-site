import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Disciplinas from "@/components/Disciplinas";
import Processo from "@/components/Processo";
import Projetos from "@/components/Projetos";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

type Variant = "a" | "b";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const { v } = await searchParams;
  const variant: Variant = v === "b" ? "b" : "a";

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero variant={variant} />
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
