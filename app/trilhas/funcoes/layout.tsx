import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha 06 — Funções e análise | Professor Dayvson",
};

export default function TrailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
