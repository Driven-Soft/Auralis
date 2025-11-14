import { useEffect, useState } from "react";
import { UserContext } from "./context";
import type { ApiUser, LoginResult } from "./type";
import { useApi } from "../Api/useApi";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const initialUser = (() => {
    try {
      const raw = localStorage.getItem("auralis_user");
      return raw ? (JSON.parse(raw) as ApiUser) : null;
    } catch {
      return null;
    }
  })();

  const [user, setUser] = useState<ApiUser | null>(initialUser);
  const [userEmail, setUserEmail] = useState<string>(initialUser?.email ?? "");
  const [userSenha, setUserSenha] = useState<string>("");
  const { apiUrl } = useApi();

  const login = async (email: string, senha: string): Promise<LoginResult> => {
    try {
      const res = await fetch(`${apiUrl}/usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const contentType = res.headers.get("content-type") || "";

      if (!res.ok) {
        if (contentType.includes("application/json")) {
          const json = await res.json();
          return {
            success: false,
            message: json?.message || JSON.stringify(json),
          };
        }
        const text = await res.text();
        return { success: false, message: text || `HTTP ${res.status}` };
      }

      if (contentType.includes("application/json")) {
        const json = await res.json();
        // assume json is the user object
        const apiUser = json as ApiUser;
        setUser(apiUser);
        setUserEmail(email);
        setUserSenha(senha);
        return { success: true, user: apiUser };
      }

      const text = await res.text();
      return { success: true, message: text };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : String(error),
      };
    }
  };

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("auralis_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("auralis_user");
      }
    } catch (error) {
      console.log("Erro ao salvar usuário no localStorage: ", error);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        userEmail,
        userSenha,
        user,
        setUser,
        setUserEmail,
        setUserSenha,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
