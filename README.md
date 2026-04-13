# M2B Projetos — Site

Landing page institucional da **M2B Projetos e Consultoria** — empresa de projetos de instalações prediais 100% em BIM, integrante do Grupo Bimconnect.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript strict**
- **Tailwind CSS v4** (design tokens em `src/app/globals.css`)
- **Nippo Variable** via Fontshare (tipografia da marca)
- Deploy: **Vercel**

## Design System

Cores extraídas do Manual de Marca M2B (2025):

| Token | Valor |
|---|---|
| `--color-navy` | `#212741` — primária dark |
| `--color-orange` | `#fa663c` — accent / CTAs |
| `--color-off-white` | `#f5f2ec` — fundos claros |
| `--font-display` | Nippo Variable |

Assinatura visual: headlines com leading apertado (~0.88), monograma M2B repetido como pattern de fundo, raios de 16px em cards/seções.

## Scripts

```bash
npm run dev     # localhost:3002
npm run build
npm run start
npm run lint
```

**Node.js 22** obrigatório (`.nvmrc`).

## Estrutura

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css      # Design tokens + utilities
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Sobre.tsx
    ├── Disciplinas.tsx
    ├── Processo.tsx
    ├── Projetos.tsx
    ├── Depoimentos.tsx
    ├── CTAFinal.tsx
    ├── Footer.tsx
    └── Logo.tsx
```

## Conteúdo

Landing page com 7 seções conforme briefing:

1. Hero — Headline + CTAs (Solicitar Orçamento / Ver Projetos)
2. Sobre a M2B
3. Disciplinas (8 áreas de atuação)
4. Como Trabalhamos (4 etapas)
5. Projetos em Destaque
6. Depoimentos
7. CTA Final + História da empresa
