/**
 * Configuração central de contato — evita strings duplicadas nos CTAs.
 */

export const WHATSAPP_NUMBER = "5562992832830"; // (62) 9 9283-2830 — formato internacional
export const EMAIL = "marcus@m2bprojetos.com.br";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da M2B Projetos e gostaria de solicitar um orçamento.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();
