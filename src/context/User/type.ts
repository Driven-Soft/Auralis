export interface ApiUser {
  id_usuario: number;
  nome: string;
  email: string;
  senha: string;
  genero: string;
  data_nascimento: string;
  data_cadastro: string;
}

export interface LoginResult {
  success: boolean;
  token?: string;
  user?: ApiUser;
  message?: string;
}

export interface UserContextType {
  userEmail: string;
  userSenha: string;
  user?: ApiUser | null;
  setUser: (user: ApiUser | null) => void;
  setUserEmail: (userEmail: string) => void;
  setUserSenha: (userSenha: string) => void;
  login?: (email: string, senha: string) => Promise<LoginResult>;
}
