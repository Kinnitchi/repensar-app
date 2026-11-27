// Os mesmos 3 registros do mockRecords.ts, agora com todas as respostas.
// Dados de exemplo só para desenhar a tela de detalhe. Saem quando o registro vier do banco.

import type {RecordDraft} from "./recordDraft";

type RecordDetail = RecordDraft & {
  id: string;
  occurredAt: string;
  status: "draft" | "completed";
};

export const MOCK_RECORD_DETAILS: RecordDetail[] = [
  {
    id: "3",
    occurredAt: "2026-11-26T12:05:00",
    status: "draft",
    situation: "Errei um cálculo na apresentação, na frente da equipe toda.",
    emotionId: "shame",
    intensityBefore: 75,
    automaticThought: "Todo mundo percebeu que eu não sei o que estou fazendo.",
    distortionIds: ["mind-reading"],
    evidenceFor: "",
    evidenceAgainst: "",
    alternativeThought: "",
    intensityAfter: null,
  },
  {
    id: "1",
    occurredAt: "2026-11-25T19:30:00",
    status: "completed",
    situation: "Meu chefe pediu para conversar amanhã cedo e não disse qual era o assunto.",
    emotionId: "anxiety",
    intensityBefore: 85,
    automaticThought: "Vou ser demitido.",
    distortionIds: ["catastrophizing", "fortune-telling"],
    evidenceFor: "Ele não disse o assunto e parecia sério.",
    evidenceAgainst: "Minhas últimas entregas foram elogiadas. Ele costuma marcar conversas para alinhar projetos.",
    alternativeThought: "Ainda não sei o assunto. Pode ser sobre o projeto novo. Se for algo difícil, consigo ouvir e lidar.",
    intensityAfter: 40,
  },
  {
    id: "2",
    occurredAt: "2026-11-24T08:10:00",
    status: "completed",
    situation: "Uma amiga não respondeu minha mensagem o dia inteiro.",
    emotionId: "sadness",
    intensityBefore: 70,
    automaticThought: "Ela não liga mais para mim.",
    distortionIds: ["mind-reading", "overgeneralization"],
    evidenceFor: "Ela demorou para responder outras vezes este mês.",
    evidenceAgainst: "Ela me chamou para sair no fim de semana passado. Hoje era dia de plantão dela.",
    alternativeThought: "Ela provavelmente está ocupada. Amanhã posso perguntar como foi o plantão.",
    intensityAfter: 35,
  },
];
