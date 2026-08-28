import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha 05 — Manipulando dados | Professor Dayvson",
};

export default function TrailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
