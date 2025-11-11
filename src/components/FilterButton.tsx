import { createElement } from "react";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return createElement(
    "button",
    {
      onClick,
      className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-sky-600 text-white shadow-md"
          : "bg-white text-slate-700 hover:bg-slate-100"
      }`,
    },
    label
  );
}
