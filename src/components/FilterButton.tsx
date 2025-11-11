import type { ReactNode } from "react";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: ReactNode;
}

const FilterButton = ({ label, active, onClick, icon }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
        active
          ? "bg-sky-600 text-white shadow-md"
          : "bg-background-secondary border border-gray-200 text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50 dark:hover:bg-blue-950 dark:hover:border-blue-800 dark:hover:text-blue-400"
      }`}
    >
      {icon ? (
        <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
      ) : null}
      <span>{label}</span>
    </button>
  );
};

export default FilterButton;
