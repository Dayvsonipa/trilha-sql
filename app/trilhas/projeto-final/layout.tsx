import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha 09 — Projeto final | Professor Dayvson",
};

export default function TrailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
