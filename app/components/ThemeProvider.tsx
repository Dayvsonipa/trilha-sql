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

  useEffect(() => {
    if (!pathname.startsWith("/trilhas/")) return;

    const navigation = document.querySelector<HTMLElement>(".lesson-nav");
    if (!navigation) return;

    const links = Array.from(navigation.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const sections = links
      .map((link) => {
        const id = link.getAttribute("href")?.slice(1);
        const section = id ? document.getElementById(id) : null;
        return id && section ? { id, link, section } : null;
      })
      .filter((item): item is { id: string; link: HTMLAnchorElement; section: HTMLElement } => Boolean(item));

    if (!sections.length) return;

    let lockedSection: string | null = null;
    let unlockTimer: number | undefined;

    function markCurrent(id: string) {
      sections.forEach((item) => {
        const isCurrent = item.id === id;
        item.link.classList.toggle("current", isCurrent);
        if (isCurrent) item.link.setAttribute("aria-current", "location");
        else item.link.removeAttribute("aria-current");
      });
    }

    function currentSectionFromScroll() {
      if (lockedSection) return;

      const readingLine = window.scrollY + Math.min(window.innerHeight * 0.32, 240);
      let current = sections[0];

      for (const item of sections) {
        const sectionTop = item.section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= readingLine) current = item;
        else break;
      }

      markCurrent(current.id);
    }

    function selectTemporarily(id: string) {
      window.clearTimeout(unlockTimer);
      lockedSection = id;
      markCurrent(id);
      unlockTimer = window.setTimeout(() => {
        lockedSection = null;
        currentSectionFromScroll();
      }, 900);
    }

    const clickHandlers = sections.map((item) => {
      const handler = () => selectTemporarily(item.id);
      item.link.addEventListener("click", handler);
      return { link: item.link, handler };
    });

    const syncFromHash = () => {
      const id = window.location.hash.slice(1);
      if (sections.some((item) => item.id === id)) selectTemporarily(id);
      else currentSectionFromScroll();
    };

    window.addEventListener("scroll", currentSectionFromScroll, { passive: true });
    window.addEventListener("hashchange", syncFromHash);
    const firstFrame = window.requestAnimationFrame(syncFromHash);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.clearTimeout(unlockTimer);
      window.removeEventListener("scroll", currentSectionFromScroll);
      window.removeEventListener("hashchange", syncFromHash);
      clickHandlers.forEach(({ link, handler }) => link.removeEventListener("click", handler));
    };
  }, [pathname]);

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
