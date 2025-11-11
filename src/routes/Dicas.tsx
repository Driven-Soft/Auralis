import {
  Moon,
  Brain,
  Dumbbell,
  Apple,
  Droplets,
  Clock,
  Lightbulb,
} from "lucide-react";

import { createElement, useState } from "react";
import type { FilterType } from "../types/filterType";
import { filters } from "../data/filtersData";
import { cards } from "../data/dicaCardData";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";
import FilterButton from "../components/FilterButton";
import IconCard from "../components/DicaCard";

function getIcon(category: FilterType) {
  switch (category) {
    case "sleep":
      return createElement(Moon, { className: "w-5 h-5" });
    case "stress":
      return createElement(Brain, { className: "w-5 h-5" });
    case "exercise":
      return createElement(Dumbbell, { className: "w-5 h-5" });
    case "nutrition":
      return createElement(Apple, { className: "w-5 h-5" });
    case "hydration":
      return createElement(Droplets, { className: "w-5 h-5" });
    case "balance":
      return createElement(Clock, { className: "w-5 h-5" });
    default:
      return null;
  }
}

const Dicas = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const filteredCards =
    filter === "all" ? cards : cards.filter((c) => c.category === filter);

  return (
    <Wrapper>
      <section className="pb-12">
        <Hero
          icon={<Lightbulb color="white" />}
          iconClassName="bg-linear-to-r from-green-400 to-green-600 shadow-glow-green"
          title="Dicas de Saúde"
          text="Pequenas mudanças que fazem grande diferença no seu bem-estar"
        />
      </section>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {filters.map((f) => (
          <FilterButton
            key={f.key}
            label={f.label}
            active={filter === f.key}
            onClick={() => setFilter(f.key)}
            icon={getIcon(f.key)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCards.map((card) => (
          <IconCard
            key={card.id}
            icon={getIcon(card.category)}
            title={card.title}
            text={card.text}
            category={card.category}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Dicas;
