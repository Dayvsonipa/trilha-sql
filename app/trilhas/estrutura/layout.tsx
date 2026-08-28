import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha 02 — Criando bancos e tabelas | Professor Dayvson",
};

export default function TrailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
