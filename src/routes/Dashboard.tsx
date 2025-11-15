import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { useApi } from "../context/Api/useApi";
import { useUser } from "../context/User/useUser";
import type { dashboardType } from "../types/dashboardType";
import { HeartHandshake } from "lucide-react";
import CardWrapper from "../components/CardWrapper";
import MarcadorPonteiro from "../components/MostradorPonteiro";

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

        const url = `${base}/registros/usuario/${userId}/semana`;
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

  // Se não houver registros, fornecer um fallback com todos os valores numéricos zerados
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

  if (loading) {
    return (
      <Wrapper>
        <div className="flex flex-row items-center justify-center gap-4 mt-4">
          <p className="text-xl font-bold text-gray-600 dark:text-gray-300">
            Carregando seus dados...
          </p>
          <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin border-gray-400 dark:border-gray-00" />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {contextUser ? (
        <>
          <section className="py-4 px-6">
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
          </section>
          <section className="flex flex-col md:flex-row gap-4 mx-4 mt-6">
            <CardWrapper className="flex-col items-center flex-1">
              <MarcadorPonteiro
                value={latest.score}
                size={400}
                title="Score de bem-estar"
              />
            </CardWrapper>
            <CardWrapper className="flex-1">
              <p></p>
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
