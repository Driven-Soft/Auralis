import { createContext } from "react";
import type { UserContextType } from "./type";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
