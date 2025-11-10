import { Heart } from "lucide-react";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";

const Sobre = () => {
  return (
    <Wrapper>
      <section>
        <Hero
          icon={<Heart color="white" />}
          iconClassName="bg-linear-to-r from-primary to-secondary shadow-glow-blue"
          title="Sobre o Auralis"
          text="Uma plataforma dedicada ao equilíbrio entre vida profissional e bem-estar pessoal"
        />
      </section>
    </Wrapper>
  );
};

export default Sobre;
