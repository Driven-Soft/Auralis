import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { useApi } from "../context/Api/useApi";
import { useUser } from "../context/User/useUser";
import type { dashboardType } from "../types/dashboardType";
import type { ApiUser } from "../context/User/type";

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
        const userId = (contextUser as ApiUser | undefined)?.id_usuario ?? 1;

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

  return (
    <Wrapper>
      {loading && <p className="dark:text-white">Carregando dados do dashboard...</p>}
      {contextUser ? (
        <section className="dark:text-white">
          <h1>Olá {contextUser.nome}</h1>
          <ul>
            <li>
              <strong>ID:</strong> {contextUser.id_usuario}
            </li>
            <li>
              <strong>Nome:</strong> {contextUser.nome}
            </li>
            <li>
              <strong>Email:</strong> {contextUser.email}
            </li>
            {contextUser.genero && (
              <li>
                <strong>Gênero:</strong> {contextUser.genero}
              </li>
            )}
            {contextUser.data_nascimento && (
              <li>
                <strong>Data Nascimento:</strong> {contextUser.data_nascimento}
              </li>
            )}
          </ul>

          <section>
            <h2>Registros da Semana</h2>
            {registros &&
              registros.map((registro, idx) => (
                <div
                  className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2"
                  key={registro.id ?? `${registro.dataRegistro}-${idx}`}
                >
                  <p>Hidratação: {registro.hidratacao}</p>
                  <p>Tempo ao sol: {registro.tempo_sol}</p>
                  <p>Nível de estresse: {registro.nivel_estresse}</p>
                  <p>Horas de sono: {registro.sono}</p>
                  <p>Tempo de tela: {registro.tempo_tela}</p>
                  <p>Horas de trabalho: {registro.trabalho_horas}</p>
                  <p>Atividade física: {registro.atividade_fisica}</p>
                  <p>Score: {registro.score}</p>
                  <p>Dia: {registro.dataRegistro.replace(/-/g, "/")}</p>
                </div>
              ))}
          </section>
        </section>
      ) : (
        <p>Usuário não autenticado.</p>
      )}
    </Wrapper>
  );
};

export default Dashboard;
