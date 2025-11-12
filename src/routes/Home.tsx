import Hero from "../components/Hero";
import NewUser from "../components/NewUser";
import UserCard from "../components/UserCard";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <section>
        <div className="pt-4 sm:pt-12 pb-4">
          <Hero
            title="Bem-vindo(a) ao Auralis"
            text="Sua plataforma de bem-estar profissional"
          />
        </div>
      </section>
    <div>
      <img src="/src/assets/images/icons/AuralisLogo.png"
      className="mx-auto w-16 h-16"
      alt="" />
    </div>

      <div className="text-center mt-6 items-center text-3xl pb-8 text-texto-primary font-medium dark:text-texto-secondary"> 
        <h2>Selecione seu perfil</h2>
      </div>

      <section className="grid grid-cols-2 w-[90%] md:w-[60%] mx-auto gap-4 md:grid-cols-2 mb-12">
        <UserCard name="Ana Silva" score={85} />
        <NewUser />
      </section>
    </Wrapper>
  );
};

export default Home;