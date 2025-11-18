import { Link, useParams } from "react-router-dom";
import { integrantes } from "../data/integrantes";
import githubEscuro from "../assets/images/icons/github-escuro.svg";
import githubLight from "../assets/images/icons/github.svg";
import linkedInLight from "../assets/images/icons/linkedin.svg";
import linkedInEscuro from "../assets/images/icons/linkedin-escuro.svg";
import Wrapper from "../components/Wrapper";
import ButtonWrapper from "../components/ButtonWrapper";
import CardWrapper from "../components/CardWrapper";
import { Code, GraduationCap, MoveLeft } from "lucide-react";

const IntegranteDetalhe = () => {
  const { rm } = useParams();
  const integrante = integrantes.find((i) => i.rm === rm);

  if (!integrante)
    return (
      <Wrapper>
        <div className="text-center py-10">
          <p className="text-4xl">Integrante não encontrado.</p>
          <div className="w-[40%] mt-6 mx-auto">
            <ButtonWrapper to="/integrantes">
              Voltar aos integrantes
            </ButtonWrapper>
          </div>
        </div>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div className="w-[95%] lg:w-[70%] mx-auto mt-6 text-gray-700 dark:text-gray-400">
        <Link to="/integrantes" className="flex flex-row items-center">
          <MoveLeft className="mt-1 mr-2" />
          Voltar para a equipe
        </Link>
      </div>
      <CardWrapper className="my-4 w-[95%] lg:w-[70%]">
        <div className="flex flex-col text-center md:text-left md:flex-row mx-auto md:px-4 sm:px-6">
          <div className="flex flex-1 justify-center md:mr-4">
            <img
              className="w-32 h-32 rounded-full mx-auto dark:shadow-glow-blue"
              src={integrante.img}
              alt={`Foto de ${integrante.nome}`}
            />
          </div>
          <div className="flex flex-4 flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {integrante.nome}
            </h1>
            <div className="text-blue-600 font-bold my-4 dark:text-blue-500">
              <p>Estudante de Análise e Desenvolvimento de Sistemas - FIAP</p>
              <p>Desenvolvedor Full Stack Junior</p>
              <p>
                <b>RM:</b> {integrante.rm}
              </p>
            </div>
            <p className="text-texto-primary text-sm sm:text-base lg:text-lg dark:text-gray-300 font-light">
              {integrante.descricao_detalhe}
            </p>
          </div>
        </div>
      </CardWrapper>

      <div className="flex justify-self-center w-[85%] md:w-[65%] gap-2 mb-4">
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

      <div
        className="flex w-[90%] lg:w-[70%] flex-col items-left justify-self-center rounded-lg border border-gray-200
         dark:border-gray-700 bg-background-secondary dark:bg-dark-background-secondary
         shadow-md py-6 px-4 hover:shadow-lg transition-all duration-200 ease-in-out"
      >
        <div className="flex flex-row gap-2 mx-2 text-center items-center">
          <Code className="w-6 h-6 mr-2 text-blue-500" />
          <h1 className="text-gray-700 dark:text-gray-300 text-xl font-medium">
            Habilidades
          </h1>
        </div>
        <div className="items-left mx-2 mt-4 flex flex-wrap">
          {integrante.habilidades.map((tecnologia) => (
            <span
              key={tecnologia}
              className="mr-2 mb-2 rounded-full hover:bg-gray-100 dark:hover:bg-blue-500 bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-700 dark:text-blue-100 whitespace-nowrap"
            >
              {tecnologia}
            </span>
          ))}
        </div>
      </div>

      <div
        className="flex my-4 w-[90%] lg:w-[70%] flex-col items-left justify-self-center rounded-lg border border-gray-200
         dark:border-gray-700 bg-background-secondary dark:bg-dark-background-secondary
         shadow-md py-6 px-4 hover:shadow-lg transition-all duration-200 ease-in-out"
      >
        <div className="flex flex-row gap-2 mx-2 text-center items-center">
          <GraduationCap className="w-6 h-6 mr-2 text-blue-500" />
          <h1 className="text-gray-700 dark:text-gray-300 text-xl font-medium">
            Formação
          </h1>
        </div>
        <p className="mx-2 my-2 text-gray-800 dark:text-texto-secondary font-medium">
          Análise e Desenvolvimento de Sistemas - FIAP
        </p>
      </div>

      <section
        className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%] gap-4 mx-auto my-5 text-left justify-self-center rounded-lg border border-gray-200
         dark:border-gray-700 bg-[#f2f8fc] dark:bg-[#16304d]
         shadow-md p-6 hover:shadow-lg transition-all duration-200 ease-in-out"
      >
        <h3 className="text-gray-800 dark:text-gray-50 font-medium">
          Interessado em colaborar ou discutir projetos? Entre em contato:
        </h3>
        <p className="text-gray-500 dark:text-gray-300 font-light">
          Contato: {" "}
          <a
            href={`mailto:${integrante.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {integrante.email}
          </a>
        </p>
      </section>
    </Wrapper>
  );
};

export default IntegranteDetalhe;