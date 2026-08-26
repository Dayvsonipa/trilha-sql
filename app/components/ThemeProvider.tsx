"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

const STORAGE_KEY = "sql-zero-avancado-theme";

export function ThemeSwitch({ compact = false }: { compact?: boolean }) {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, setTheme } = context;

  return (
    <div className={`theme-switch${compact ? " compact" : ""}`} role="group" aria-label="Escolher tema da página">
      <button
        className={theme === "light" ? "selected" : ""}
        aria-pressed={theme === "light"}
        onClick={() => setTheme("light")}
        title="Usar tema claro"
      >
        <span aria-hidden="true">☀</span><small>Claro</small>
      </button>
      <button
        className={theme === "dark" ? "selected" : ""}
        aria-pressed={theme === "dark"}
        onClick={() => setTheme("dark")}
        title="Usar tema escuro"
      >
        <span aria-hidden="true">◐</span><small>Escuro</small>
      </button>
    </div>
  );
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`site-theme theme-${theme}`}>
        {pathname.startsWith("/trilhas/") && (
          <div className="trail-theme-control">
            <ThemeSwitch compact />
          </div>
        )}
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
