"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

type TrailMeta = {
  number: string;
  title: string;
};

const TRAILS: Record<string, TrailMeta> = {
  ambiente: { number: "00", title: "Preparando o ambiente" },
  fundamentos: { number: "01", title: "Fundamentos de bancos" },
  estrutura: { number: "02", title: "Criando bancos e tabelas" },
  select: { number: "03", title: "Primeiras consultas" },
  filtros: { number: "04", title: "Filtros e buscas" },
  manipulacao: { number: "05", title: "Manipulando dados" },
  funcoes: { number: "06", title: "Funções e análise" },
  joins: { number: "07", title: "Conectando tabelas" },
  subconsultas: { number: "08", title: "Subconsultas e relatórios" },
  "projeto-final": { number: "09", title: "Projeto final" },
};

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

const STORAGE_KEY = "sql-zero-avancado-theme";

export function ThemeSwitch({ compact = false }: { compact?: boolean }) {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, setTheme } = context;
  const nextTheme: Theme = theme === "light" ? "dark" : "light";
  const label = nextTheme === "dark" ? "Ativar tema escuro" : "Ativar tema claro";

  return (
    <button
      className={"theme-toggle" + (compact ? " compact" : "")}
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(nextTheme)}
    >
      <span aria-hidden="true">{theme === "light" ? "◐" : "☀"}</span>
      <small>{theme === "light" ? "Escuro" : "Claro"}</small>
    </button>
  );
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const trailSlug = pathname.startsWith("/trilhas/")
    ? pathname.split("/").filter(Boolean).at(-1)
    : undefined;
  const trail = trailSlug ? TRAILS[trailSlug] : undefined;


  useEffect(() => {
    const defaultTitle = "SQL do Zero ao Avançado | Professor Dayvson";
    document.title = trail
      ? `Trilha ${trail.number} — ${trail.title} | Professor Dayvson`
      : defaultTitle;
  }, [trail]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
      setMenuOpen(false);
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
      <div className={"site-theme theme-" + theme + (menuOpen ? " trail-menu-open" : "")}>
        {trail && (
          <>
            <aside className="track-brand-panel" aria-label="Identidade do curso">
              <a className="brand" href="/" aria-label="Página inicial do Professor Dayvson">
                <span className="brand-mark" aria-hidden="true">D</span>
                <span>
                  <strong>Professor Dayvson</strong>
                  <small>Central de Aulas</small>
                </span>
              </a>
            </aside>

            <header className="track-topbar">
              <div className="track-topbar-start">
                <button
                  className="track-menu-button"
                  type="button"
                  aria-label={menuOpen ? "Fechar menu da trilha" : "Abrir menu da trilha"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((current) => !current)}
                >
                  <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
                </button>
                <div className="track-heading">
                  <small>PROF. DAYVSON · TRILHA {trail.number}</small>
                  <strong>{trail.title}</strong>
                </div>
              </div>
              <ThemeSwitch compact />
            </header>

            {menuOpen && (
              <button
                className="track-menu-backdrop"
                type="button"
                aria-label="Fechar menu da trilha"
                onClick={() => setMenuOpen(false)}
              />
            )}
          </>
        )}
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
