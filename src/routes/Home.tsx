import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <section>
        <Hero
          title="Bem-vindo(a) ao Auralis"
          text="Sua plataforma de bem-estar profissional"
        />
      </section>
    </Wrapper>
  );
};

export default Home;
