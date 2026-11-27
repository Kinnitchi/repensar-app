// Os 7 passos do Registro de Pensamentos (RPD).
// A tela Aprender usa agora. O assistente de novo registro vai usar a mesma lista quando for estilizado.

type RecordStep = {
  title: string;
  description: string;
};

export const RECORD_STEPS: RecordStep[] = [
  {title: "Situação", description: "O que aconteceu, onde e com quem."},
  {title: "Emoções", description: "O que você sentiu e com que força, de 0 a 100."},
  {title: "Pensamento automático", description: "A frase que passou pela cabeça naquela hora."},
  {title: "Distorções", description: "Quais atalhos da mente aparecem nesse pensamento."},
  {title: "Evidências", description: "Os fatos a favor e contra o pensamento."},
  {title: "Pensamento alternativo", description: "Um jeito mais equilibrado de ver a situação."},
  {title: "Reavaliação", description: "Como a emoção ficou depois de repensar."},
];
