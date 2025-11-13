import { useState } from "react";
import { UserContext } from "./context";

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userSenha, setUserSenha] = useState("");

  return (
    <UserContext.Provider value={{ userEmail, userSenha }}>
      {children}
    </UserContext.Provider>
  );
};
