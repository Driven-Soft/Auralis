import React, { useEffect, useState, useCallback } from "react";
import { ThemeContext } from "./context";
import type { ThemePreference } from "./type";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => {
    try {
      const stored = localStorage.getItem("theme-preference");
      return (stored as ThemePreference) ?? "system";
    } catch {
      return "system";
    }
  });

  const getSystemPrefersDark = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const computeIsDark = useCallback((pref: ThemePreference) => {
    if (pref === "dark") return true;
    if (pref === "light") return false;
    return getSystemPrefersDark();
  }, []);

  const [isDark, setIsDark] = useState<boolean>(() =>
    computeIsDark(preference)
  );

  useEffect(() => {
    const root = document.documentElement;

    const apply = (dark: boolean) => {
      if (dark) root.classList.add("dark");
      else root.classList.remove("dark");
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = () => {
      const newIsDark = computeIsDark(preference);
      setIsDark(newIsDark);
      apply(newIsDark);
    };

    // apply initial
    const initialIsDark = computeIsDark(preference);
    setIsDark(initialIsDark);
    apply(initialIsDark);

    // persist explicit preference
    try {
      if (preference === "dark" || preference === "light")
        localStorage.setItem("theme-preference", preference);
      else localStorage.removeItem("theme-preference");
    } catch {
      // ignore
    }

    // listen to system changes when in system mode
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleSystemChange);
    } else {
      // older browsers
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      mq.addListener(handleSystemChange);
    }

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handleSystemChange);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mq.removeListener(handleSystemChange);
      }
    };
  }, [preference, computeIsDark]);

  const setPreference = (p: ThemePreference) => setPreferenceState(p);

  const toggleTheme = () => {
    // toggling always sets an explicit preference (not system)
    const currentlyDark = computeIsDark(preference);
    setPreferenceState(currentlyDark ? "light" : "dark");
  };

  const followSystem = () => setPreferenceState("system");

  return (
    <ThemeContext.Provider
      value={{ preference, isDark, setPreference, toggleTheme, followSystem }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
