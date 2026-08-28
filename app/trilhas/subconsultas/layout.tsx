import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha 08 — Subconsultas e relatórios | Professor Dayvson",
};

export default function TrailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
