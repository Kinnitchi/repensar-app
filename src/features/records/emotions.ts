// Emoções mais comuns no registro. Por enquanto a pessoa escolhe a principal.
// Os id em inglês são os mesmos usados na tela de Insights.

type Emotion = {
  id: string;
  name: string;
};

export const EMOTIONS: Emotion[] = [
  {id: "anxiety", name: "Ansiedade"},
  {id: "sadness", name: "Tristeza"},
  {id: "anger", name: "Raiva"},
  {id: "shame", name: "Vergonha"},
  {id: "guilt", name: "Culpa"},
  {id: "fear", name: "Medo"},
  {id: "frustration", name: "Frustração"},
  {id: "loneliness", name: "Solidão"},
];
