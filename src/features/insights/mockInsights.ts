// Números de exemplo só para desenhar a tela. Saem quando os registros vierem do banco.

export type CountItem = {
  id: string;
  label: string;
  count: number;
};

export type InsightsSummary = {
  periodLabel: string;
  totalRecords: number;
  completedRecords: number;
  // Médias de 0 a 100, calculadas só com os registros concluídos.
  averageBefore: number;
  averageAfter: number;
  topEmotions: CountItem[];
  topDistortions: CountItem[];
};

// Com menos registros concluídos do que isso, os números enganam mais do que ajudam.
export const MIN_COMPLETED_FOR_INSIGHTS = 3;

export const MOCK_INSIGHTS: InsightsSummary = {
  periodLabel: "Últimos 30 dias",
  totalRecords: 12,
  completedRecords: 9,
  averageBefore: 78,
  averageAfter: 41,
  topEmotions: [
    {id: "anxiety", label: "Ansiedade", count: 5},
    {id: "sadness", label: "Tristeza", count: 3},
    {id: "shame", label: "Vergonha", count: 2},
    {id: "anger", label: "Raiva", count: 1},
  ],
  topDistortions: [
    {id: "catastrophizing", label: "Catastrofização", count: 6},
    {id: "mind-reading", label: "Leitura mental", count: 4},
    {id: "all-or-nothing", label: "Tudo ou nada", count: 2},
  ],
};

export const EMPTY_INSIGHTS: InsightsSummary = {
  periodLabel: "Últimos 30 dias",
  totalRecords: 1,
  completedRecords: 0,
  averageBefore: 0,
  averageAfter: 0,
  topEmotions: [],
  topDistortions: [],
};
