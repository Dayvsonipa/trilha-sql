import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha 04 — Filtros e buscas | Professor Dayvson",
};

export default function TrailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
