import type { ApiUser } from "../Api/type";

export interface UserContextType {
  userEmail: string;
  userSenha: string;
  user?: ApiUser | null;
  setUser: (user: ApiUser | null) => void;
  setUserEmail: (userEmail: string) => void;
  setUserSenha: (userSenha: string) => void;
}
