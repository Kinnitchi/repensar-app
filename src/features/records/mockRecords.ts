// Dados de exemplo só para desenhar a tela. Saem na etapa 6, quando a lista vier do banco.

export type RecordSummary = {
  id: string;
  occurredAt: string;
  situation: string;
  status: "draft" | "completed";
  emotion: {
    name: string;
    before: number;
    after: number | null;
  };
};

export const MOCK_RECORDS: RecordSummary[] = [
  {
    id: "3",
    occurredAt: "2026-11-26T12:05:00",
    situation: "Errei um cálculo na apresentação, na frente da equipe toda.",
    status: "draft",
    emotion: {name: "Vergonha", before: 75, after: null},
  },
  {
    id: "1",
    occurredAt: "2026-11-25T19:30:00",
    situation: "Meu chefe pediu para conversar amanhã cedo e não disse qual era o assunto.",
    status: "completed",
    emotion: {name: "Ansiedade", before: 85, after: 40},
  },
  {
    id: "2",
    occurredAt: "2026-11-24T08:10:00",
    situation: "Uma amiga não respondeu minha mensagem o dia inteiro.",
    status: "completed",
    emotion: {name: "Tristeza", before: 70, after: 35},
  },
];
