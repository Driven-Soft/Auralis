    import { ApiContext } from "./context";

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const apiUrl = "http://localhost:4000/";

  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {children}
    </ApiContext.Provider>
  );
};
