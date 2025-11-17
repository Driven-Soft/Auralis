export interface User {
  id_usuario: number;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  genero: string;
  data_nascimento: string;
  data_cadastro: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (
    email: string,
    senha: string
  ) => Promise<{
    success: boolean;
    message?: string;
    user: User | null;
  }>;
}
