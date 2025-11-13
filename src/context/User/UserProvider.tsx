import { useEffect, useState } from "react";
import { UserContext } from "./context";

const LOGIN_KEY = "auralis_user";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userEmail, setUserEmail] = useState(() => {
    try {
      const raw = localStorage.getItem(LOGIN_KEY);
      if (!raw) return "";
      const parsed = JSON.parse(raw);
      return parsed?.email ?? "";
    } catch {
      return "";
    }
  });

  const [userSenha, setUserSenha] = useState(() => {
    try {
      const raw = localStorage.getItem(LOGIN_KEY);
      if (!raw) return "";
      const parsed = JSON.parse(raw);
      return parsed?.senha ?? "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    try {
      const payload = JSON.stringify({ email: userEmail, senha: userSenha });
      localStorage.setItem(LOGIN_KEY, payload);
    } catch {
      // Ignorar erros de armazenamento
    }
  }, [userEmail, userSenha]);

  return (
    <UserContext.Provider
      value={{ userEmail, userSenha, setUserEmail, setUserSenha }}
    >
      {children}
    </UserContext.Provider>
  );
};