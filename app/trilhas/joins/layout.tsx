import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha 07 — Conectando tabelas | Professor Dayvson",
};

export default function TrailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
