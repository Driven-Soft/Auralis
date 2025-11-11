import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqCardProps {
  titulo: string;
  detalhes: string;
  className?: string;
}

const FaqCard = ({ titulo, detalhes, className }: FaqCardProps) => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const toggleDetalhes = () => {
    setMostrarDetalhes((prev) => !prev);
  };

  return (
    <div
      onClick={toggleDetalhes}
      className={`cursor-pointer  ${className || ""}`}
    >
      <div
        className={`flex justify-between items-center px-4 py-1 transition-colors duration-100 ease-in-out hover:bg-[#f5f5f5] dark:hover:bg-texto-primary
        ${mostrarDetalhes ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <p>
          <strong className="text-md font-bold text-texto-primary dark:text-texto-secondary">{titulo}</strong>
        </p>

        <div>
          <ChevronDown
            className={`w-10 h-10 mb-2 aspect-square object-contain transition-transform duration-400 dark:text-texto-secondary ${
              mostrarDetalhes ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out
          ${mostrarDetalhes ? "opacity-100 py-3" : "max-h-0 opacity-0 py-0"}
        px-4 rounded-b-sm
        `}
      >
        <p className="font-normal font-sm text-texto-primary dark:text-gray-400">{detalhes}</p>
      </div>
    </div>
  );
};

export default FaqCard;
