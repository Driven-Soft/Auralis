export type ThemePreference = "light" | "dark" | "system";

export interface ThemeContextType {
  preference: ThemePreference;
  isDark: boolean;
  setPreference: (p: ThemePreference) => void;
  toggleTheme: () => void;
  followSystem: () => void;
}
