// Conteúdo fixo do app, não é dado de exemplo.
// Lista clássica de distorções cognitivas da TCC (Aaron Beck e David Burns).

export type Distortion = {
  id: string;
  name: string;
  summary: string; // uma linha, aparece na lista do Aprender
  example: string; // pensamento típico, vai aparecer na tela da distorção
  question: string; // pergunta para questionar o pensamento
};

export const DISTORTIONS: Distortion[] = [
  {
    id: "catastrophizing",
    name: "Catastrofização",
    summary: "Imaginar o pior desfecho e tratar como se fosse certo.",
    example: "Se eu errar nessa apresentação, vou ser demitido.",
    question: "Qual é o desfecho mais provável, e não só o pior?",
  },
  {
    id: "mind-reading",
    name: "Leitura mental",
    summary: "Ter certeza do que o outro pensa sem que ele tenha dito.",
    example: "Ela não respondeu porque está chateada comigo.",
    question: "Que provas eu tenho do que a pessoa está pensando?",
  },
  {
    id: "fortune-telling",
    name: "Previsão do futuro",
    summary: "Prever que algo vai dar errado e agir como se já fosse fato.",
    example: "Nem vou tentar, não vou passar mesmo.",
    question: "Quantas das minhas previsões ruins já se confirmaram?",
  },
  {
    id: "all-or-nothing",
    name: "Tudo ou nada",
    summary: "Ver só dois extremos, sem meio-termo.",
    example: "Se não ficou perfeito, foi um fracasso.",
    question: "Existe algo entre o perfeito e o fracasso?",
  },
  {
    id: "overgeneralization",
    name: "Supergeneralização",
    summary: "Tirar uma regra geral de um único acontecimento.",
    example: "Nada dá certo para mim.",
    question: "Isso acontece sempre mesmo, ou foi desta vez?",
  },
  {
    id: "mental-filter",
    name: "Filtro mental",
    summary: "Prestar atenção só no que deu errado e deixar o resto de lado.",
    example: "Recebi vários elogios e uma crítica, e só consigo pensar na crítica.",
    question: "O que mais aconteceu que eu não estou levando em conta?",
  },
  {
    id: "discounting-positive",
    name: "Desqualificar o positivo",
    summary: "Achar que as coisas boas não contam ou foram só sorte.",
    example: "Só me elogiaram por educação.",
    question: "Se fosse com alguém de quem eu gosto, eu diria que não conta?",
  },
  {
    id: "emotional-reasoning",
    name: "Raciocínio emocional",
    summary: "Achar que, se você sente algo, então é verdade.",
    example: "Eu me sinto um fracasso, então eu sou um fracasso.",
    question: "O que os fatos mostram, separando do que eu sinto?",
  },
  {
    id: "should-statements",
    name: "Afirmações com “deveria”",
    summary: "Cobrar regras rígidas de como você ou os outros têm que ser.",
    example: "Eu deveria dar conta de tudo sem pedir ajuda.",
    question: "Quem disse que tem que ser assim? O que seria mais justo comigo?",
  },
  {
    id: "labeling",
    name: "Rotulação",
    summary: "Resumir você ou outra pessoa a um rótulo.",
    example: "Eu sou uma pessoa inútil.",
    question: "Um erro define quem eu sou por inteiro?",
  },
  {
    id: "personalization",
    name: "Personalização",
    summary: "Assumir a culpa por algo que não depende só de você.",
    example: "A reunião foi ruim por minha causa.",
    question: "Que outras coisas influenciaram o que aconteceu?",
  },
];
