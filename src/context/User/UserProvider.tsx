import { useState, useEffect, type ReactNode } from "react";
import { UserContext } from "./context";
import type { User, UserContextType } from "./type";
import { useApi } from "../Api/useApi";

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const { apiUrl } = useApi();

  const STORAGE_KEY = "auralis_user";

  const setUser: UserContextType["setUser"] = (u) => {
    setUserState(u);
    try {
      if (u) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (err) {
      console.error("Erro ao persistir usuário no localStorage:", err);
    }
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as User;
        setUserState(parsed);
      }
    } catch (err) {
      console.error("Erro ao ler usuário do localStorage:", err);
    }
  }, []);

  const login: UserContextType["login"] = async (email, senha) => {
    try {
      const response = await fetch(`${apiUrl}usuarios/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        return {
          success: false,
          message: "Credenciais inválidas ou erro no servidor",
          user: null,
        };
      }
      const data = await response.json();

      const userRaw = data.user ?? data;

      const mappedUser: User = {
        id_usuario: userRaw.idUsuario ?? userRaw.id_usuario ?? userRaw.id ?? 0,
        nome: userRaw.nome ?? "",
        email: userRaw.email ?? "",
        senha: userRaw.senha ?? "",
        telefone: userRaw.telefone ?? userRaw.telefone ?? "",
        genero: userRaw.genero ?? "",
        data_nascimento: userRaw.nascimento ?? userRaw.data_nascimento ?? "",
        data_cadastro: userRaw.dataCadastro ?? userRaw.data_cadastro ?? "",
      };

      setUser(mappedUser);

      return {
        success: data.success ?? true,
        message: data.message ?? "",
        user: mappedUser,
      };
    } catch (error) {
      console.error("Erro ao acessar API:", error);
      return {
        success: false,
        message: "Erro de conexão com servidor",
        user: null,
      };
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
}
