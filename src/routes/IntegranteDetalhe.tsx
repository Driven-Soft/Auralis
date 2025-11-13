import { Link, useParams } from "react-router-dom";
import { integrantes } from "../data/integrantes";
import githubEscuro from "../assets/images/icons/github-escuro.svg";
import githubLight from "../assets/images/icons/github.svg";
import linkedInLight from "../assets/images/icons/linkedin.svg";
import linkedInEscuro from "../assets/images/icons/linkedin-escuro.svg";
import Wrapper from "../components/Wrapper";
import ButtonWrapper from "../components/ButtonWrapper";
import CardWrapper from "../components/CardWrapper";
import { MoveLeft } from "lucide-react";

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
            <MoveLeft className="mt-1 mr-2"/>
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
            <p className="text-texto-primary dark:text-gray-300 font-light">
              {integrante.descricao_detalhe}
            </p>
          </div>
        </div>
      </CardWrapper>

      <div className="flex justify-self-center w-[85%] md:w-[60%] gap-2 mb-6">
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

      {/* <div className="flex flex-col flex-1 justify-center mt-4">
        <div className="my-5 text-lg lg:text-xl font-medium text-center text-[#313131]">
          <h2 className="mb-7 text-lg lg:text-xl font-medium text-[#313131]">
            Interessado em colaborar ou discutir projetos? Entre em contato:
          </h2>
          <p>São Paulo - Brasil</p>
          <p>
            Contato:{" "}
            <a
              href={`mailto:${integrante.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {integrante.email}
            </a>
          </p>
        </div>

          
        </div> */}
    </Wrapper>
  );
};

export default IntegranteDetalhe;