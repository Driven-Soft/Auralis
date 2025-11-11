import type { FilterType } from "./filterType";

export interface DicaCardData {
  id: string;
  title: string;
  text: string;
  category: FilterType;
}