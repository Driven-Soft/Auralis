export interface usuarioType {
  id: number;
  nome_usuario: string;
  email: string;
  senha?: string;
  genero?: string;
  data_nascimento?: string;
  data_cadastro?: string;
};