// src/app/layout.js
import { Stack } from "@mui/material";
import "./globals.css";
import Link from "next/link";
import * as React from 'react';

export const metadata = {
  title: "Meu Projeto Next.js",
  description: "Site de exemplo com layout global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {/* Barra de navegação global */}
        <header style={{ background: "#222", color: "#fff", padding: "1rem" }}>
  <nav style={{ display: "flex", gap: "1rem" }}>
    <Link href="/">Home</Link>
    <Link href="/about">Sobre</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/dashboard">Dashboard</Link>
  </nav>
</header>

        {/* Conteúdo das páginas */}
        <main style={{ padding: "1rem" }}>{children}</main>

        {/* Footer global */}
        <footer style={{ background: "#eee", padding: "1rem", marginTop: "2rem" }}>
          <p>© 2025 - Iasaldo</p>
        </footer>
      </body>
    </html>
  );
}
