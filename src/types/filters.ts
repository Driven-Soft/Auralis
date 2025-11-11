import type { FilterType } from "./filterType";

export const filters: { key: FilterType; label: string }[] = [
  { key: "all", label: "Todas" },
  { key: "sleep", label: "Sono" },
  { key: "stress", label: "Estresse" },
  { key: "exercise", label: "Exercício" },
  { key: "nutrition", label: "Nutrição" },
  { key: "hydration", label: "Hidratação" },
  { key: "balance", label: "Equilíbrio" },
];
