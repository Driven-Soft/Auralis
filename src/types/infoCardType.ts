import type { FilterType } from "./filterType";

export interface InfoCardData {
  id: string;
  title: string;
  text: string;
  category: FilterType;
}