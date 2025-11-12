import HomeCard from "../components/HomeCard";
import Wrapper from "../components/Wrapper";
import { ActivityIcon, BowArrow, CloudCheck, Heart, HeartPulseIcon, TrendingUpIcon } from "lucide-react";

const Home = () => {
  return (
    <Wrapper>
      <section className="flex flex-col items-center text-center px-4 py-8">
        <div className="bg-linear-to-r from-primary to-secondary rounded-full p-5 shadow-lg">
          <HeartPulseIcon size={64} className="text-white" />
        </div>
        <h1 className="text-3xl sm:text-6xl pt-5 text-texto-primary font-bold dark:text-white">
          Auralis
        </h1>
        <p className="text-2xl text-gray-500 pb-5 pt-4 dark:text-gray-500">
          Sua plataforma de bem-estar profissional
        </p>
      </section>

      <section className="w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <HomeCard
            icon={<ActivityIcon />}
            iconClassName="text-blue-500"
            title="Monitore sua saúde"
            texto="Acompanhe métricas diárias de bem-estar e evolua constantemente"
          />
          <HomeCard
            icon={<BowArrow />}
            iconClassName="text-green-500"
            title="Sistema de gamificação"
            texto="Ganhe XP e suba de nível cuidando da sua saúde"
          />
          <HomeCard
            icon={<Heart />}
            iconClassName="text-red-500"
            title="Dicas personalizadas"
            texto="Receba orientações de saúde adaptadas ao seu perfil"
          />
        </div>
      </section>

      <section className="w-[70%] md:w-[50%] mx-auto mb-12">
        <div className="grid grid-cols-2 gap-4 mt-4">
          <HomeCard
            icon={<TrendingUpIcon />}
            iconClassName="text-purple-500"
            title="Gráficos de evolução"
            texto="Visualize seu progresso com gráficos claros e informativos"
          />
          <HomeCard
            icon={<CloudCheck />}
            iconClassName="text-orange-500"
            title="Acesso multiplataforma"
            texto="Use o Auralis em qualquer dispositivo, a qualquer hora"
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
