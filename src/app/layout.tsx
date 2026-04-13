import type { Metadata } from "next";
import ScrollAnimations from "@/components/ScrollAnimations";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://m2b-site.vercel.app"),
  title: {
    default: "M2B Projetos — Instalações Prediais com Alto Desempenho em BIM",
    template: "%s | M2B Projetos",
  },
  description:
    "30 anos de experiência em projetos e consultoria de instalações prediais, 100% em plataforma BIM. Hidráulica, piscinas, sanitário, pluvial, gás, PPCI e aquecimento.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "M2B Projetos",
    title: "M2B Projetos — Instalações Prediais com Alto Desempenho em BIM",
    description:
      "Projetos 100% BIM para obras seguras, eficientes e sem retrabalho. 30 anos de atuação.",
  },
  twitter: {
    card: "summary_large_image",
    title: "M2B Projetos",
    description:
      "Projetos 100% BIM para obras seguras, eficientes e sem retrabalho.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-navy">
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
