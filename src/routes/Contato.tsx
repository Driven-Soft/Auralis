import { Contact, Mail, Phone } from "lucide-react";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";
import CardWrapper from "../components/CardWrapper";
import ButtonWrapper from "../components/ButtonWrapper";

const Contato = () => {
  return (
    <Wrapper>
      <section>
        <Hero
          icon={<Contact color="white" />}
          iconClassName="bg-linear-to-r from-primary to-secondary shadow-glow-blue"
          title="Fale Conosco"
          text="Entre em contato com a equipe do Auralis — adoramos receber seu feedback"
        />
      </section>

      <section>
        <CardWrapper className="flex-col w-[90%] sm:w-[80%] mx-auto my-10">
          <h1 className="py-2 text-2xl font-bold mb-2 text-texto-primary dark:text-texto-secondary">
            Como nos encontrar
          </h1>
          <p className="px-4 py-2 text-texto-primary dark:text-gray-300">
            Se tiver dúvidas, sugestões ou precisar de suporte, envie uma
            mensagem pelo formulário abaixo ou use um dos canais diretos.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-30 mt-6">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-blue-950 dark:text-blue-400 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700">
                  <Mail />
                </div>
                <div>
                  <p className="font-semibold text-texto-primary dark:text-texto-secondary">
                    Email
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    suporte@auralis.app
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-blue-950 dark:text-blue-400 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700">
                  <Phone />
                </div>
                <div>
                  <p className="font-semibold text-texto-primary dark:text-texto-secondary">
                    Telefone
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    +55 (11) 4000-0000
                  </p>
                </div>
              </div>
            </div>
          </div>

         <hr className="mx-auto border-t-2 rounded-3xl w-[90%] lg:w-[70%] mt-8 border-gray-300 dark:border-gray-500" />
        
        <div className="text-center">
          <h1 className="py-2 text-2xl font-bold mt-4 text-secondary pb-4">
            Deseja entrar em contato com nossos desenvolvedores?
          </h1>
          <p className="px-4 pb-5 text-texto-primary dark:text-gray-100">
            Descobra mais sobre nossa equipe e como contribuir para o Auralis
            clicando aqui:
          </p>
        </div>
          <div className="w-fit">
            <ButtonWrapper to="/integrantes" className="px-4 w-fit">
              Conheça os Desenvolvedores
            </ButtonWrapper>
          </div>
        </CardWrapper>
      </section>
    </Wrapper>
  );
};

export default Contato;
