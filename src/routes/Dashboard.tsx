import { createElement, useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { useApi } from "../context/Api/useApi";
import { useUser } from "../context/User/useUser";
import type { dashboardType } from "../types/dashboardType";
import {
  AlarmClock,
  BriefcaseBusiness,
  ChartColumnBig,
  ContactIcon,
  Droplets,
  Dumbbell,
  HeartHandshake,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  Plus,
  Sun,
  Zap,
} from "lucide-react";
import CardWrapper from "../components/CardWrapper";
import MarcadorPonteiro from "../components/MostradorPonteiro";
import GraficoScore from "../components/GraficoScore";
import ButtonWrapper from "../components/ButtonWrapper";
import MetricaCard from "../components/MetricaCard";
import type { MetricaType } from "../types/metricaType";

const Dashboard = () => {
  const { apiUrl } = useApi();
  const { user: contextUser } = useUser();
  const [registros, setRegistros] = useState<dashboardType[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRegistros() {
      setLoading(true);
      try {
        const base = apiUrl;
        const userId = contextUser?.id_usuario;

        // Se não houver userId (usuário não pronto), pular a requisição
        if (!userId) {
          setRegistros(null);
          return;
        }

        const url = `${base}registros/usuario/${userId}/semana`;
        const res = await fetch(url);

        if (!res.ok)
          throw new Error(`Erro ao buscar registros (${res.status})`);
        const data: dashboardType[] = await res.json();
        setRegistros(data);
        console.log("Registros carregados:", data);
        console.log(data.map((registro) => registro.dataRegistro));
      } catch (err) {
        console.error("Erro ao carregar registros:", err);
      } finally {
        setLoading(false);
      }
    }

    loadRegistros();
  }, [apiUrl, contextUser]);

  // FALLBACK -> SEM REGISTROS
  const latest: dashboardType =
    registros && registros.length > 0
      ? registros[0]
      : {
          id: 0,
          id_usuario: contextUser?.id_usuario ?? 0,
          hidratacao: 0,
          tempo_sol: 0,
          nivel_estresse: 0,
          sono: 0,
          tempo_tela: 0,
          trabalho_horas: 0,
          atividade_fisica: 0,
          score: 0,
          dataRegistro: "",
        };

  // dashBoardType[] -> (RegistroAPI[])
  const registrosParaGrafico =
    registros && registros.length > 0
      ? registros.map((r) => ({
          idRegistro: r.id,
          idUsuario: r.id_usuario,
          hidratacao: r.hidratacao,
          tempo_sol: r.tempo_sol,
          nivel_estresse: r.nivel_estresse,
          sono: r.sono,
          tempo_tela: r.tempo_tela,
          trabalho_horas: r.trabalho_horas,
          atividade_fisica: r.atividade_fisica,
          score: r.score,
          dataRegistro: r.dataRegistro,
        }))
      : [];

  const previous = registros && registros.length > 1 ? registros[1] : null;

  const percentDiff = (
    latestVal: number,
    prevVal: number | null
  ): number | null => {
    if (prevVal === null || prevVal === undefined) return null;
    if (prevVal === 0) return latestVal === 0 ? 0 : null;
    return ((latestVal - prevVal) / prevVal) * 100;
  };

  if (loading) {
    return (
      <Wrapper>
        <div className="flex flex-row items-center justify-center gap-4 mt-12">
          <p className="text-xl font-bold text-gray-600 dark:text-gray-300">
            Carregando seus dados...
          </p>
          <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin border-gray-400 dark:border-gray-00" />
        </div>
      </Wrapper>
    );
  }

  function getIcon(category: MetricaType) {
    switch (category) {
      case "hidratacao":
        return createElement(Droplets, { className: "w-5 h-5" });
      case "tempo_sol":
        return createElement(Sun, { className: "w-5 h-5" });
      case "nivel_estresse":
        return createElement(Zap, { className: "w-5 h-5" });
      case "sono":
        return createElement(AlarmClock, { className: "w-5 h-5" });
      case "trabalho_horas":
        return createElement(BriefcaseBusiness, { className: "w-5 h-5" });
      case "atividade_fisica":
        return createElement(Dumbbell, { className: "w-5 h-5" });
      case "tempo_tela":
        return createElement(MonitorSmartphone, { className: "w-5 h-5" });
      default:
        return null;
    }
  }

  return (
    <Wrapper>
      {contextUser ? (
        <>
          <section className="py-8 px-6 items-center justify-center text-center">
            <div className="flex flex-col text-left">
              <div className="flex flex-row text-center items-center gap-2 text-4xl font-bold text-gray-800 dark:text-white">
                <h1>Olá, {contextUser.nome}!</h1>
                <HeartHandshake />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Seu último score de bem-estar está em
                <span className="text-secondary dark:text-primary text-xl">
                  {" "}
                  {latest.score}
                </span>{" "}
                pontos!
              </p>
            </div>
          </section>
          <div className="px-2 md:px-4">
            <section className="flex flex-col lg:flex-row gap-4 mx-1 mt-0">
              <CardWrapper className="flex-col items-center flex-1">
                <MarcadorPonteiro
                  value={latest.score}
                  size={400}
                  title="Score de bem-estar"
                />
              </CardWrapper>
              <CardWrapper className="flex-1">
                <div className="flex items-center text-center justify-center mx-auto w-full">
                  {registrosParaGrafico.length > 0 ? (
                    <GraficoScore registros={registrosParaGrafico} />
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      Nenhum registro disponível para exibir o gráfico.
                    </p>
                  )}
                </div>
              </CardWrapper>
            </section>
          </div>
          <hr className="mx-auto border-t-2 rounded-3xl w-[90%] lg:w-[50%] mt-8 border-gray-300 dark:border-gray-500" />
          <section className="py-8 px-6 items-center justify-center text-left w-[90%] md:w-[50%] mx-auto">
            <ButtonWrapper className="bg-secondary text-white dark:bg-secondary border-2 gap-2">
              <Plus />
              Adicionar registro diário
            </ButtonWrapper>
          </section>
          <hr className="mx-auto border-t-2 rounded-3xl w-[90%] lg:w-[50%] mb-4 border-gray-300 dark:border-gray-500" />
          <section className="py-2 px-2 w-[90%] sm:px-10 text-lg sm:text-2xl text-gray-800 dark:text-white font-bold mb-4 flex flex-row items-center gap-2 flex-nowrap justify-center sm:justify-start text-center sm:text-left mx-auto sm:mx-0">
            <h1>Últimas Métricas Registradas</h1>
            <ChartColumnBig />
          </section>

          <section className="grid grid-cols-1 pb-6 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 px-2 sm:px-10 items-center">
            <MetricaCard
              icon={getIcon("hidratacao")}
              title={"Hidratação"}
              valor={`${latest.hidratacao}`}
              diffPercent={percentDiff(
                latest.hidratacao,
                previous ? previous.hidratacao : null
              )}
              text="ml"
              category={"hidratacao"}
            />
            <MetricaCard
              icon={getIcon("tempo_sol")}
              title={"Tempo de Sol"}
              valor={`${latest.tempo_sol}`}
              diffPercent={percentDiff(
                latest.tempo_sol,
                previous ? previous.tempo_sol : null
              )}
              text="minutos"
              category={"tempo_sol"}
            />
            <MetricaCard
              icon={getIcon("nivel_estresse")}
              title={"Nível de Estresse"}
              valor={`${latest.nivel_estresse}`}
              diffPercent={percentDiff(
                latest.nivel_estresse,
                previous ? previous.nivel_estresse : null
              )}
              text="/10"
              category={"nivel_estresse"}
            />
            <MetricaCard
              icon={getIcon("sono")}
              title={"Sono"}
              valor={`${latest.sono}`}
              diffPercent={percentDiff(
                latest.sono,
                previous ? previous.sono : null
              )}
              text="horas"
              category={"sono"}
            />
            <MetricaCard
              icon={getIcon("trabalho_horas")}
              title={"Horas de Trabalho"}
              valor={`${latest.trabalho_horas}`}
              diffPercent={percentDiff(
                latest.trabalho_horas,
                previous ? previous.trabalho_horas : null
              )}
              text="horas"
              category={"trabalho_horas"}
            />
            <MetricaCard
              icon={getIcon("atividade_fisica")}
              title={"Atividade Física"}
              valor={`${latest.atividade_fisica}`}
              diffPercent={percentDiff(
                latest.atividade_fisica,
                previous ? previous.atividade_fisica : null
              )}
              text="minutos"
              category={"atividade_fisica"}
            />
            <MetricaCard
              className="lg:hidden"
              icon={getIcon("tempo_tela")}
              title={"Tempo de Tela"}
              valor={`${latest.tempo_tela}`}
              diffPercent={percentDiff(
                latest.tempo_tela,
                previous ? previous.tempo_tela : null
              )}
              text="horas"
              category={"tempo_tela"}
            />
            <div className="hidden lg:flex col-span-3 justify-center pb-6 sm:pb-0 w-[50%] mx-auto">
              <MetricaCard
                icon={getIcon("tempo_tela")}
                title={"Tempo de Tela"}
                valor={`${latest.tempo_tela}`}
                diffPercent={percentDiff(
                  latest.tempo_tela,
                  previous ? previous.tempo_tela : null
                )}
                text="horas"
                category={"tempo_tela"}
              />
            </div>
          </section>

          <hr className="mx-auto border-t-2 rounded-3xl w-[90%] lg:w-[70%] mb-4 border-gray-300 dark:border-gray-500" />
          <section className="py-2 px-2 w-[90%] sm:px-10 text-lg sm:text-2xl text-gray-800 dark:text-white font-bold mb-4 flex flex-row items-center gap-2 flex-nowrap justify-center sm:justify-start text-center sm:text-left mx-auto sm:mx-0">
            <h1>Seção de contato</h1>
            <ContactIcon />
          </section>

          <section className="flex flex-col md:flex-row gap-4 mx-4 pb-4">
            <CardWrapper className="flex-1">
              <div className="flex flex-col justify-center mx-auto">
                <div className="flex flex-1 flex-row gap-2 ">
                  <div className="w-10 h-10 text-indigo-600 bg-indigo-50 dark:bg-blue-950 dark:text-blue-400  flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700">
                    <Phone />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-800 dark:text-white text-center">
                    Notificações
                  </h2>
                </div>
                <div className="pb-5 pt-3 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Receba lembretes diários para registrar suas métricas e
                    manter seu bem-estar em dia!
                  </p>
                </div>
                <ButtonWrapper to="/notificacoes">
                  Receber notificações
                </ButtonWrapper>
              </div>
            </CardWrapper>

            <CardWrapper className="flex-1">
              <div className="flex flex-col justify-center mx-auto">
                <div className="flex flex-1 flex-row gap-2 ">
                  <div className="w-10 h-10 text-indigo-600 bg-indigo-50 dark:bg-blue-950 dark:text-blue-400  flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700">
                    <MessageSquare />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-800 dark:text-white text-center">
                    Feedback
                  </h2>
                </div>
                <div className="pb-5 pt-3 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Envie um feedback sobre nossa plataforma e ajude-nos a
                    melhorar continuamente!
                  </p>
                </div>
                <ButtonWrapper to="/feedback">Enviar feedback</ButtonWrapper>
              </div>
            </CardWrapper>
          </section>
        </>
      ) : (
        <p>Usuário não autenticado.</p>
      )}
    </Wrapper>
  );
};

export default Dashboard;
