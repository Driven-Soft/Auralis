import { createContext } from "react";
import type { ApiContextType } from "./type";

export const ApiContext = createContext<ApiContextType | undefined>(undefined);
