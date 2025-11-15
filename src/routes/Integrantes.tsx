import { Users } from "lucide-react";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";
import { integrantes } from "../data/integrantes";
import IntegranteCard from "../components/IntegranteCard";
import CardWrapper from "../components/CardWrapper";
import ButtonWrapper from "../components/ButtonWrapper";
import AuralisLogo from "../assets/images/icons/AuralisLogo.png";

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

      <section className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mx-3 sm:mx-8 lg:mx-10">
        {integrantes.map((i) => (
          <IntegranteCard key={i.rm} integrante={i} />
        ))}
      </section>

      <section className="pb-12 mx-12">
        <CardWrapper className="flex-col gap-4 text-center">
        <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-all duration-200 rounded-lg">
          <img
            src={AuralisLogo}
            alt="Auralis"
            className="w-full h-full object-contain"
          />
        </div>
          <h1 className="text-2xl font-bold text-texto-primary dark:text-texto-secondary">
            Junte-se a Nós
          </h1>
          <p className="text-md text-gray-500 dark:text-gray-300">
            Estamos sempre em busca de pessoas talentosas e apaixonadas por
            fazer a diferença na vida dos profissionais.
          </p>
          <div className="w-[60%]">
          <ButtonWrapper
            href="https://github.com/Driven-Soft"
            className="bg-secondary text-white dark:bg-secondary border-2"
            >
            Conheça nossa Organização
          </ButtonWrapper>
            </div>
        </CardWrapper>
      </section>
    </Wrapper>
  );
};

export default Integrantes;
