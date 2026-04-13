# Proposta: Migração da Hospedagem para Vercel

**Cliente:** M2B Projetos e Consultoria
**De:** Virtus Design — Marco Túlio Lobo
**Data:** abril/2026
**Assunto:** Recomendação técnica de hospedagem para o novo site institucional

---

## 1. Contexto

O novo site da M2B Projetos foi desenvolvido na stack mais atual do mercado (Next.js 16 + React 19 + Tailwind CSS v4) — a mesma plataforma usada por empresas como **Nike, TikTok, Notion, Sonos, Loom, Hashicorp** e milhares de SaaS modernos. Esta arquitetura permite carregamento praticamente instantâneo, otimização automática de imagens, segurança nativa e SEO de ponta.

Para extrair o **máximo desempenho** desse stack, é fundamental que a hospedagem acompanhe a tecnologia. A Hostinger é uma boa solução para sites WordPress tradicionais, mas **não é otimizada para aplicações modernas em React/Next.js**.

A nossa recomendação é hospedar o site na **Vercel** — plataforma criada pela mesma empresa que mantém o Next.js, projetada especificamente para esta tecnologia.

---

## 2. Por que sair da Hostinger

| Limitação atual | Impacto no site M2B |
|---|---|
| Servidor compartilhado PHP | Exige adaptação manual e perde recursos nativos do Next.js |
| Sem suporte nativo a Edge / SSR | Páginas mais lentas, sem renderização global distribuída |
| Cache limitado e configuração manual | SEO e Core Web Vitals abaixo do potencial real |
| Sem preview deployments | Cada ajuste solicitado vai direto para o site real, sem ambiente de validação |
| Build manual via FTP / cPanel | Atualizações lentas e propensas a erro |
| Logs e analytics básicos | Sem visibilidade real do comportamento de visitantes |

---

## 3. O que ganhamos com Vercel

### Performance
- **CDN global em 100+ regiões** — site servido sempre da localização mais próxima do visitante (latência <50ms no Brasil).
- **Otimização automática de imagens** (WebP/AVIF, lazy-loading, dimensionamento responsivo).
- **ISR — Incremental Static Regeneration** — páginas estáticas que se atualizam sozinhas a cada X minutos, combinando velocidade de site estático com frescor de CMS.
- **Pontuação 95-100 no Google PageSpeed** garantida pela arquitetura.

### Operação
- **Deploy automático via GitHub** — qualquer alteração aprovada vira atualização no site em ~30 segundos, sem FTP, sem painel.
- **Preview Deployments** — cada nova feature ou ajuste gera uma URL temporária para você revisar antes de publicar (`m2b-feature-x.vercel.app`).
- **Rollback em 1 clique** — se algo quebrar, voltar para a versão anterior é instantâneo.
- **HTTPS, certificado SSL e renovação automática** — sem configuração nem custo adicional.

### Confiabilidade
- **Uptime de 99,99%** com SLA contratual.
- **DDoS protection** nativo.
- **Headers de segurança** automatizados.

### Visibilidade
- **Vercel Analytics** integrado (pageviews, Core Web Vitals reais por visitante).
- **Logs em tempo real** de qualquer requisição.
- **Speed Insights** — vê exatamente quais visitantes têm experiência ruim e por quê.

---

## 4. Comparativo direto

| Critério | Hostinger Premium | **Vercel Pro** |
|---|---|---|
| **Custo mensal** | ~R$ 30 | ~R$ 110 (US$ 20) |
| **Stack ideal** | WordPress / PHP | Next.js / React (nativo) |
| **CDN** | Limitada | Global, 100+ regiões |
| **Deploy** | FTP / cPanel manual | Automático via Git em ~30s |
| **Preview de mudanças** | ❌ Não tem | ✅ URL única por alteração |
| **Otimização de imagens** | Manual | Automática (WebP/AVIF) |
| **HTTPS / SSL** | Sim | Sim |
| **Analytics de performance** | Básico | Vercel Analytics + Speed Insights |
| **Rollback** | Manual / restore de backup | 1 clique |
| **Suporte oficial Next.js** | ❌ | ✅ Mantenedora oficial |
| **Bandwidth incluso** | 100 GB | 1 TB |
| **Build minutes** | N/A | 6.000/mês |

> **Diferença real de custo:** ~R$ 80/mês = R$ 960/ano.
> Para uma empresa de engenharia com 29 anos de mercado e ticket médio de projeto na casa dos milhares de reais, esse investimento se paga com **um único contato qualificado** vindo do site melhor posicionado.

---

## 5. Plano de migração (sem downtime)

A migração é segura e o site atual continua no ar até o novo estar 100% validado.

| Etapa | Tempo | O que acontece |
|---|---|---|
| 1. Setup da conta Vercel | 30 min | Criação da conta, conexão com o repositório GitHub do site |
| 2. Deploy de homologação | 10 min | Site disponível em URL temporária (`m2b-site.vercel.app`) para validação |
| 3. Validação e ajustes | 1–3 dias | Marcus revisa, aprova, solicita ajustes finais |
| 4. Configuração do domínio | 30 min | Apontamento DNS de `m2bprojetos.com.br` para Vercel |
| 5. Propagação DNS | 1–24h | DNS propaga globalmente — site no ar |
| 6. Cancelamento da Hostinger | — | Após 7 dias de operação estável, cancelar plano antigo |

**Sem perda de email:** O domínio fica na Vercel apenas para o site; emails (`marcus@m2bprojetos.com.br`) continuam roteados para o provedor atual via registros MX.

---

## 6. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Custo recorrente em USD (variação cambial) | Plano anual com travamento de preço |
| Curva de aprendizado | A Virtus Design opera tudo. Marcus não precisa mexer em nada. |
| Dependência de fornecedor estrangeiro | Vercel Pro é GDPR/SOC2 compliant; podemos exportar o site para qualquer outro host a qualquer momento (é só um build estático + funções) |
| Email institucional | Permanece no provedor atual (Hostinger ou outro) — só o site migra |

---

## 7. Recomendação

Migrar o site institucional da M2B Projetos para a **Vercel Pro**, mantendo o email no provedor atual.

**Investimento:** R$ 110/mês (US$ 20).
**Retorno:** site 3–5x mais rápido, deploy contínuo profissional, ambiente de validação para cada ajuste, e visibilidade real de performance — tudo alinhado com o posicionamento de "engenharia 100% BIM, alto desempenho e zero retrabalho" que a M2B comunica em projeto.

A coerência entre o **discurso técnico do site** e a **infraestrutura que o serve** comunica seriedade ao visitante qualificado (engenheiros, construtoras, arquitetos) que você quer atrair.

---

**Marco Túlio Lobo**
Virtus Design
[marco@virtusdesign.com.br](mailto:marco@virtusdesign.com.br) · WhatsApp: +55 62 98470-0903
