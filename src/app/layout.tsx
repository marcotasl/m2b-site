import type { Metadata } from "next";
import ScrollAnimations from "@/components/ScrollAnimations";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://m2b-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "M2B Projetos — Instalações Prediais com Alto Desempenho em BIM",
    template: "%s | M2B Projetos",
  },
  description:
    "30 anos de experiência em projetos e consultoria de instalações prediais, 100% em plataforma BIM. Hidráulica, piscinas, sanitário, pluvial, gás, PPCI e aquecimento.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "M2B Projetos",
    url: SITE_URL,
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Virtus Design", url: "https://virtusdesign.com.br" }],
  creator: "Virtus Design",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "M2B Projetos e Consultoria",
  alternateName: "M2B",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/m2b-default.svg`,
  description:
    "Projetos e consultoria de instalações prediais 100% em BIM — hidráulica, piscinas, sanitário, pluvial, gás predial, aquecimento coletivo e PPCI.",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Marcus Marques Basílio",
    jobTitle: "Arquiteto e fundador",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "BIMConnect Engenharia Integrada",
    url: "https://bimconnect.eng.br",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+55-62-99283-2830",
    email: "marcus@m2bprojetos.com.br",
    availableLanguage: ["Portuguese"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Disciplinas de instalações prediais",
    itemListElement: [
      "Hidráulica",
      "Piscinas",
      "Sanitário",
      "Pluvial",
      "Gás Predial",
      "Prevenção e Combate a Incêndio",
      "Aquecimento Coletivo",
      "Consultoria e Comissionamento",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-navy">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
