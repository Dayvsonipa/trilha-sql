import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "SQL do Zero ao Avançado",
  description: "Aprenda MySQL no Workbench com trilhas, missões e o projeto LevelUp Store.",
  openGraph: {
    title: "SQL do Zero ao Avançado",
    description: "Do primeiro comando ao relatório que decide — com o Professor Dayvson.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SQL do Zero ao Avançado — Professor Dayvson" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL do Zero ao Avançado",
    description: "Aprenda MySQL com trilhas práticas e desafios.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><ThemeProvider>{children}</ThemeProvider></body></html>;
}
