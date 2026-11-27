// Paleta "Lavanda": base clara e fria, índigo como cor principal,
// verde para melhora e coral para rascunho. Todo texto passa de 4.5:1 de contraste.
export const colors = {
  background: "#F6F6FA", // fundo das telas: quase branco, levemente frio
  surface: "#FFFFFF", // cartões, barra de abas e campos
  border: "#E4E4EE", // bordas e trilhos das barras
  outline: "#878BA0", // contorno de campos, chips e Switch desligado: 3:1 de contraste, para ver onde tocar
  primary: "#9C95F5", // lavanda: formas e barras (não usar em texto)
  primaryDark: "#5A4FCF", // índigo: botão principal, ícones ativos e textos de destaque
  onPrimary: "#FFFFFF", // texto e ícones sobre o índigo
  secondary: "#6CC5A8", // verde-menta: barras de melhora
  secondarySoft: "#E1F5EE", // fundo do resultado "85 → 40"
  secondaryDark: "#1D6B53", // texto sobre o verde claro
  accent: "#F4A38C", // coral: citações e barras de distorção
  accentSoft: "#FDEBE5", // fundo do selo "Rascunho"
  accentDark: "#A3462B", // texto sobre o coral claro
  text: "#1E2130", // quase preto azulado: títulos e textos
  textMuted: "#5D6275", // textos secundários
} as const;
