import { CircleQuestionMarkIcon } from "lucide-react";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";

const Faq = () => {
  return (
    <Wrapper>
      <section>
        <Hero
          icon={<CircleQuestionMarkIcon color="white" />}
          iconClassName="bg-linear-to-r from-primary to-secondary shadow-glow-blue"
          title="Perguntas Frequentes"
          text="Encontre respostas para as dúvidas mais comuns sobre o Auralis"
        />
      </section>
    </Wrapper>
  );
};

export default Faq;
