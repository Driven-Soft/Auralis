import { Users } from "lucide-react";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";

const Integrantes = () => {
  return (
    <Wrapper>
      <section>
        <Hero
          icon={<Users color="white" />}
          iconClassName="bg-linear-to-r from-primary to-secondary shadow-glow-blue"
          title="Nossa Equipe"
          text="Conheça as pessoas por trás do Auralis"
        />
      </section>
    </Wrapper>
  );
};

export default Integrantes;
