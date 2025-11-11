import type { ReactNode } from "react";
import type { FilterType } from "../types/filterType";

interface DicaCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  colorClass?: string;
  category: FilterType;
}

const DicaCard = ({ icon, title, text, colorClass, category }: DicaCardProps) => {

  const categoryLabels: Record<FilterType, string> = {
    all: "Todos",
    sleep: "Sono",
    stress: "Estresse",
    exercise: "Exercício",
    nutrition: "Alimentação",
    hydration: "Hidratação",
    balance: "Equilíbrio",
  };

  const categoryColorClasses: Record<FilterType, string> = {
    all: "text-gray-600 bg-gray-50 dark:bg-gray-950 dark:text-gray-400",
    sleep:
      "text-indigo-600 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-400",
    stress: "text-red-500 bg-red-50 dark:bg-gray-800 dark:text-red-400",
    exercise:
      "text-green-600 bg-green-50 dark:bg-gray-800 dark:text-green-400",
    nutrition:
      "text-amber-600 bg-amber-50 dark:bg-gray-800 dark:text-amber-400",
    hydration: "text-teal-600 bg-teal-50 dark:bg-teal-950 dark:text-teal-400",
    balance:
      "text-purple-600 bg-purple-50 dark:bg-gray-800 dark:text-purple-400",
  };

  const appliedColorClass = colorClass ?? categoryColorClasses[category];

  return (
    <div
      className="rounded-lg border border-gray-200 dark:border-gray-700 bg-background-secondary dark:bg-dark-background-secondary
         shadow-md p-6 hover:shadow-lg transition-all hover:scale-102 duration-200 ease-in-out"
    >
      <div className="flex flex-row gap-3">
        <div className={`w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 ${appliedColorClass}`}>
          {icon}
        </div>
        <div>
          <span className={`text-sm ${appliedColorClass} rounded-full py-1 px-2 border border-gray-200 dark:border-gray-700`}>
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