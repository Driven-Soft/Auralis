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

export interface ApiContextType {
  apiUrl: string;
  login: (email: string, senha: string) => Promise<LoginResult>;
}
