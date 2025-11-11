import type { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  colorClass?: string;
}

const IconCard = ({ icon, title, text, colorClass }: IconCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`w-12 h-12 mb-3 flex items-center justify-center rounded-full ${colorClass ?? "bg-blue-50 text-blue-600"}`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 leading-snug">{text}</p>
    </div>
  );
}
  
export default IconCard