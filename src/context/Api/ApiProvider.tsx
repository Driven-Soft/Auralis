import { ApiContext } from "./context";

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const apiUrl = "https://auralis-api.onrender.com/";
  return (
    <ApiContext.Provider value={{ apiUrl }}>{children}</ApiContext.Provider>
  );
};
