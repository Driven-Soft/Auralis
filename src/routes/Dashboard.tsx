import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { useApi } from "../context/Api/useApi";
import { useUser } from "../context/User/useUser";
import type { dashboardType } from "../types/dashboardType";

type Usuario = {
  id: number;
  nome_usuario: string;
  email: string;
  senha?: string;
  genero?: string;
  data_nascimento?: string;
  data_cadastro?: string;
};

const Dashboard = () => {
  const { apiUrl } = useApi();
  const { userEmail } = useUser();
  const [user, setUser] = useState<Usuario | null>(null);
  const [registros, setRegistros] = useState<dashboardType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAndRegistros = async () => {
      setLoading(true);
      try {
        // Buscar usuário: primeiro por email (se disponível), senão fallback para id=1
        let fetchedUser: Usuario | null = null;

        if (userEmail) {
          const resUser = await fetch(
            `${apiUrl}auralis_usuarios?email=${encodeURIComponent(userEmail)}`
          );
          if (!resUser.ok)
            throw new Error(`Erro ao buscar usuário (${resUser.status})`);
          const users: Usuario[] = await resUser.json();
          fetchedUser = users[0] ?? null;
        } else {
          const resUser = await fetch(`${apiUrl}auralis_usuarios/1`);
          if (resUser.ok) fetchedUser = await resUser.json();
        }

        if (!fetchedUser) throw new Error("Usuário não encontrado");
        setUser(fetchedUser);

        // Buscar somente registros do usuário
        const resRegs = await fetch(
          `${apiUrl}auralis_registros?id_usuario=${fetchedUser.id}`
        );
        if (!resRegs.ok)
          throw new Error(`Erro ao buscar registros (${resRegs.status})`);
        const regs: dashboardType[] = await resRegs.json();
        setRegistros(regs);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError(String(err) || "Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndRegistros();
  }, [apiUrl, userEmail]);

  return (
    <Wrapper>
      <section>
        <h1>Olá {user ? user.nome_usuario : ""}</h1>

        {user && (
          <div style={{ marginBottom: 12 }}>
            <p>
              <strong>Nome:</strong> {user.nome_usuario}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {user.genero && (
              <p>
                <strong>Gênero:</strong> {user.genero}
              </p>
            )}
            {user.data_nascimento && (
              <p>
                <strong>Data de Nascimento:</strong> {user.data_nascimento}
              </p>
            )}
          </div>
        )}

        {loading && <p>Carregando registros...</p>}
        {error && <p style={{ color: "red" }}>Erro: {error}</p>}

        {registros && (
          <div>
            <p>{registros.length} registro(s) encontrados.</p>
            <ul>
              {registros.map((r) => (
                <li key={r.id}>
                  <strong>{r.data_registro}</strong> — Score: {r.score}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default Dashboard;
