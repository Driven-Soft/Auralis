import type { Integrante } from "../data/integrantes";
import ButtonWrapper from "./ButtonWrapper";
import githubEscuro from "../assets/images/icons/github-escuro.svg";
import githubLight from "../assets/images/icons/github.svg";
import linkedInLight from "../assets/images/icons/linkedin.svg";
import linkedInEscuro from "../assets/images/icons/linkedin-escuro.svg";

interface IntegranteCardProps {
  integrante: Integrante;
}

const IntegranteCard = ({ integrante }: IntegranteCardProps) => {
  return (
    <div className="flex flex-col w-auto sm:flex-row lg:flex-col bg-background-secondary dark:bg-dark-background-secondary my-3 lg:my-2 p-5 lg:p-4 px-4 lg:px-6 sm:px-10 rounded-2xl items-center shadow-md hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-600">
      <img
        className="w-30 h-30 mb-2 max-w-xs sm:h-50 sm:w-50 md:max-w-md lg:my-5 lg:max-w-sm sm:my-8 sm:mr-8 lg:mr-0 lg:w-32 lg:h-32 rounded-full shadow-[0_0_5px_rgba(0,0,0,0.2)]"
        src={integrante.img}
        alt={`Imagem do integrante ${integrante.nome}`}
      />
      <div className="flex flex-col gap-2 w-full sm:w-[55%] md:w-full wrap-break-word text-center text-lg md:text-xl font-normal">
        <p className="text-gray-700 dark:text-texto-secondary lg:text-sm">
          {integrante.nome} - 1TDSPK
        </p>
        <p className="text-primary">{integrante.capacitacao}</p>
        <p className="text-primary dark:text-texto-secondary font-bold lg:text-sm">
          RM: {integrante.rm}
        </p>
        <p className="text-gray-700 dark:text-texto-secondary lg:text-sm">
          {integrante.descricao}
        </p>

        <hr className="w-full border-t-4 rounded-3xl border-gray-300 dark:border-gray-500 my-3" />

        <div className="flex w-full gap-2 py-2">
          <div className="w-1/2">
            <ButtonWrapper href={integrante.git}>
              <div className="flex flex-row gap-2 justify-center text-center items-center">
                <img
                  src={githubEscuro}
                  alt="Ícone do GitHub (tema claro)"
                  className="inline-block w-6 h-6 dark:hidden"
                />
                <img
                  src={githubLight}
                  alt="Ícone do GitHub (tema escuro)"
                  className="w-6 h-6 hidden dark:inline-block"
                />
                <p className="text-sm">GitHub</p>
              </div>
            </ButtonWrapper>
          </div>

          <div className="w-1/2">
            <ButtonWrapper href={integrante.linkedIn}>
              <div className="flex flex-row gap-2 justify-center text-center items-center">
                <img
                  src={linkedInEscuro}
                  alt="Ícone do LinkedIn (tema claro)"
                  className="inline-block w-6 h-6 dark:hidden"
                />
                <img
                  src={linkedInLight}
                  alt="Ícone do LinkedIn (tema escuro)"
                  className="w-6 h-6 hidden dark:inline-block"
                />
                <p className="text-sm">LinkedIn</p>
              </div>
            </ButtonWrapper>
          </div>
        </div>
        <ButtonWrapper to={`/integrantes/${integrante.rm}`}>
          <p className="text-sm">Ver mais detalhes</p>
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default IntegranteCard;