import type { ReactNode } from "react";
import type { FilterType } from "../types/filterType";

interface DicaCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  colorClass?: string;
  category: FilterType;
}

const DicaCard = ({
  icon,
  title,
  text,
  colorClass,
  category,
}: DicaCardProps) => {
  const categoryLabels: Record<FilterType, string> = {
    all: "Todos",
    sleep: "Sono",
    stress: "Estresse",
    exercise: "Exercício",
    nutrition: "Alimentação",
    hydration: "Hidratação",
    balance: "Equilíbrio",
  };

  return (
    <div
      className="rounded-lg border border-gray-200 dark:border-gray-700 bg-background-secondary dark:bg-dark-background-secondary
         shadow-md p-6 hover:shadow-lg transition-all hover:scale-102 duration-200 ease-in-out"
    >
      <div className="flex flex-row gap-3">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 dark:border-blue-900 ${
            colorClass ??
            "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
          }`}
        >
          {icon}
        </div>
        <div>
          <span className="text-sm text-blue-600 bg-blue-50 rounded-full py-1 px-2 border border-gray-200 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400">
            {categoryLabels[category]}
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-4 gap-2">
        <h3 className="text-lg font-semibold text-texto-primary dark:text-texto-secondary mb-1">
          {title}
        </h3>
        <p className="text-sm text-texto-primary dark:text-gray-400 leading-snug">
          {text}
        </p>
      </div>
    </div>
  );
};

export default DicaCard;
