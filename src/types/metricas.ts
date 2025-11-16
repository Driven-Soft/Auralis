import type { MetricaType } from "./metricaType";

export const filters: { key: MetricaType; label: string }[] = [
  { key: "hidratacao", label: "Hidratação" },
  { key: "tempo_sol", label: "Tempo de Sol" },
  { key: "nivel_estresse", label: "Nível de Estresse" },
  { key: "sono", label: "Tempo de sono" },
  { key: "trabalho_horas", label: "Tempo de Trabalho" },
  { key: "atividade_fisica", label: "Tempo de Atividade Física" },
  { key: "tempo_tela", label: "Tempo de Tela" }
];
