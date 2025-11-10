import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <section>
        <div className="py-12">
          <Hero
            title="Bem-vindo(a) ao Auralis"
            text="Sua plataforma de bem-estar profissional"
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
