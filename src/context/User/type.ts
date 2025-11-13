export interface UserContextType {
  userEmail: string;
  userSenha: string;
  setUserEmail: (userEmail: string) => void;
  setUserSenha: (userSenha: string) => void;
}
