import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha 01 — Fundamentos de bancos | Professor Dayvson",
};

export default function TrailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
