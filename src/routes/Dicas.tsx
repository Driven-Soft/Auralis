import { Lightbulb } from "lucide-react";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";

const Dicas = () => {
  return (
    <Wrapper>
      <section>
        <Hero
          icon={<Lightbulb color="white" />}
          iconClassName="bg-linear-to-r from-green-400 to-green-600 shadow-glow-green"
          title="Dicas de Saúde"
          text="Pequenas mudanças que fazem grande diferença no seu bem-estar"
        />
      </section>
    </Wrapper>
  );
};

export default Dicas;
