import { Heart, HeartIcon, Target, TrendingUp, User } from "lucide-react";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";
import CardWrapper from "../components/CardWrapper";
import SobreCard from "../components/SobreCard";

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

      <section>
        <CardWrapper className="flex-col w-[90%] sm:w-[80%] mx-auto my-10">
          <h1 className="py-2 text-2xl font-bold mb-2 text-texto-primary dark:text-texto-secondary">
            Nossa Missão
          </h1>
          <p className="px-4 py-2 text-texto-primary dark:text-gray-300">
            O Auralis nasceu da necessidade de criar uma ferramenta que ajudasse
            profissionais a manterem o equilíbrio entre suas responsabilidades
            de trabalho e sua saúde física e emocional. Acreditamos que o
            bem-estar não é um luxo, mas uma necessidade fundamental para uma
            vida produtiva e feliz.
          </p>
        </CardWrapper>

        <div className="grid grid-rows-1 w-[90%] sm:w-[80%] lg:grid-cols-2 gap-6 my-10 mx-auto">
          <SobreCard
            icon={<HeartIcon size={30} className="text-primary" />}
            title="Bem-Estar Integral"
            text="Acompanhe múltiplas dimensões da sua saúde física e mental em um só lugar."
          />
          <SobreCard
            icon={<Target size={30} className="text-primary" />}
            title="Metas Personalizadas"
            text="Defina objetivos realistas e acompanhe seu progresso de forma visual e intuitiva."
          />
          <SobreCard
            icon={<TrendingUp size={30} className="text-primary" />}
            title="Insights Inteligentes"
            text="Receba análises e sugestões baseadas nos seus padrões de comportamento."
          />
          <SobreCard
            icon={<User size={30} className="text-primary" />}
            title="Privacidade Garantida"
            text="Seus dados são privados e seguros. Você tem controle total sobre suas informações."
          />
        </div>

        <CardWrapper className="flex-col w-[90%] sm:w-[80%] mx-auto my-10">
          <h1 className="py-2 text-2xl font-bold mb-2 text-texto-primary dark:text-texto-secondary">
            Como Funciona
          </h1>
          <div className="flex gap-4 flex-col px-4 py-2 text-texto-primary dark:text-gray-300">
            <p>
              O Auralis utiliza um sistema de pontuação de 0 a 100 que considera
              sete dimensões principais do seu bem-estar: qualidade do sono,
              nível de estresse, atividade física, hidratação, tempo de
              exposição a telas, tempo de exposição ao sol e horas trabalhadas.
            </p>
            <p>
              Ao registrar seus dados diariamente, você pode visualizar
              tendências, identificar padrões e fazer ajustes conscientes em sua
              rotina para melhorar sua qualidade de vida.
            </p>
          </div>
        </CardWrapper>
      </section>
    </Wrapper>
  );
};

export default Sobre;
