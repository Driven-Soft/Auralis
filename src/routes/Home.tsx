import HomeCard from "../components/HomeCard";
import LoginCard from "../components/LoginCard";
import Wrapper from "../components/Wrapper";
import {
  ActivityIcon,
  BowArrow,
  CloudCheck,
  Heart,
  HeartPulseIcon,
  TrendingUpIcon,
} from "lucide-react";

const Home = () => {
  return (
    <Wrapper>
      <section className="flex flex-col items-center text-center px-4 md:py-8 pt-8">
        <div className="bg-linear-to-r from-primary to-secondary rounded-full p-5 shadow-glow-blue">
          <HeartPulseIcon size={64} className="text-white" />
        </div>
        <h1 className="text-3xl sm:text-6xl pt-5 text-texto-primary font-bold dark:text-white">
          Auralis
        </h1>
        <p className="text-2xl text-gray-500 pb-5 pt-4 dark:text-gray-500">
          Sua plataforma de bem-estar profissional
        </p>
      </section>

      <section className="md:w-[95%] lg:w-[80%] mx-auto">
        <div className="md:grid hidden grid-cols-3 gap-4">
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

      <section className="md:w-[75%] lg:w-[55%] mx-auto md:mb-8">
        <div className="md:grid hidden grid-cols-2 gap-4 mt-4">
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

      <section className="flex flex-col text-center font-medium text-lg text-secondary mx-auto w-[80%] mb-8">
        <hr className="w-full md:w-[70%] self-center my-4 border-t-2 rounded-3xl border-gray-300 dark:border-gray-500" />
        <p>
          Faça login abaixo ou comece sua jornada criando seu perfil agora
          mesmo!
        </p>
        <hr className="w-full md:w-[70%] self-center my-4 border-t-2 rounded-3xl border-gray-300 dark:border-gray-500" />
      </section>

      <section className="w-full">
        <LoginCard />
      </section>

      <div className="flex flex-col text-center text-gray-400 dark:text-gray-500 font-light mb-6">
        <p>Caso queira testar a aplicação com dados de exemplo, use:</p>
        <p>
          <strong>Email:</strong> felipe@exemplo.com
        </p>
        <p>
          <strong>Senha:</strong> 123456
        </p>
      </div>

    {/* !!!TRECHO DISPONÍVEL APENAS NO MOBILE!!! */}
    <div className="flex flex-col md:hidden text-center font-bold text-2xl text-secondary mx-auto w-[80%] mb-2">
      <hr className="w-full md:w-[70%] self-center my-4 border-t-2 rounded-3xl border-gray-300 dark:border-gray-500" />
      <p>Conheça nossos recursos</p>
      <hr className="w-full md:w-[70%] self-center my-4 border-t-2 rounded-3xl border-gray-300 dark:border-gray-500" />
    </div>

    <section className="w-[95%] mx-auto mb-8 md:mb-0">
        <div className="grid md:hidden grid-cols-1 gap-4">
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
