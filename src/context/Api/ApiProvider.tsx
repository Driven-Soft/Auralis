import { ApiContext } from "./context";

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const apiUrl = "https://auralis-api.onrender.com/";

  const login = async (email: string, senha: string) => {
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
        return { success: true, user: json };
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

  return (
    <ApiContext.Provider value={{ apiUrl, login }}>
      {children}
    </ApiContext.Provider>
  );
};
