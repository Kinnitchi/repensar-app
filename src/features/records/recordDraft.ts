// O que o assistente vai preenchendo, passo a passo.
// Na etapa do banco, este formato vira o schema do Zod e a tabela do SQLite.

export type RecordDraft = {
  situation: string;
  emotionId: string | null;
  intensityBefore: number | null;
  automaticThought: string;
  distortionIds: string[];
  evidenceFor: string;
  evidenceAgainst: string;
  alternativeThought: string;
  intensityAfter: number | null;
};

export const EMPTY_DRAFT: RecordDraft = {
  situation: "",
  emotionId: null,
  intensityBefore: null,
  automaticThought: "",
  distortionIds: [],
  evidenceFor: "",
  evidenceAgainst: "",
  alternativeThought: "",
  intensityAfter: null,
};
