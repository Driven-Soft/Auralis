import { useEffect, useState } from "react";
import { UserContext } from "./context";
import type { ApiUser } from "../Api/type";

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
    <UserContext.Provider value={{ userEmail, userSenha, user, setUser, setUserEmail, setUserSenha }}>
      {children}
    </UserContext.Provider>
  );
};
