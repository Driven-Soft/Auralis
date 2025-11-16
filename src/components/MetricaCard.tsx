import type { ReactNode } from "react";
import type { MetricaType } from "../types/metricaType";

interface MetricaCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  colorClass?: string;
  category: MetricaType;
  valor?: string;
  className?: string;
}

const MetricaCard = ({ icon, title, text, colorClass, category, valor, className }: MetricaCardProps) => {

  const categoryLabels: Record<MetricaType, string> = {
  hidratacao: "Hidratação",
  tempo_sol: "Tempo de Sol",
  nivel_estresse: "Nível de Estresse",
  sono: "Tempo de Sono",
  trabalho_horas: "Horas de Trabalho",
  atividade_fisica: "Tempo de Atividade Física",
  tempo_tela: "Tempo de Tela"
  };

  const categoryColorClasses: Record<MetricaType, string> = {
    hidratacao:
    "text-indigo-600 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-400",
    tempo_sol:
    "text-amber-600 bg-amber-50 dark:bg-gray-800 dark:text-amber-400",
    nivel_estresse: "text-red-500 bg-red-50 dark:bg-gray-800 dark:text-red-400",
    sono:
    "text-green-600 bg-green-50 dark:bg-gray-800 dark:text-green-400",
    trabalho_horas:
    "text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-400",
    atividade_fisica: "text-teal-600 bg-teal-50 dark:bg-teal-950 dark:text-teal-400",
    tempo_tela: "text-purple-600 bg-purple-50 dark:bg-purple-950 dark:text-purple-400",
  };

  const appliedColorClass = colorClass ?? categoryColorClasses[category];

  return (
    <div
      className={`w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-background-secondary dark:bg-dark-background-secondary
         shadow-md py-3 px-5 sm:p-6 hover:shadow-lg transition-all hover:scale-102 duration-200 ease-in-out ${className}`}
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
        <p className="text-lg text-texto-primary dark:text-gray-400 leading-snug">
          <strong className="text-3xl dark:text-white">{valor}</strong> {text}
        </p>
      </div>
    </div>
  );
};

export default MetricaCard;