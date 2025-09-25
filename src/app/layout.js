// src/app/layout.js
import { Avatar, Button, colors, Stack } from "@mui/material";
import "./globals.css";
import Link from "next/link";
import * as React from "react";

export const metadata = {
  title: "Portifolio Iasaldo",
  description: "Site de exemplo com layout global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {/* Barra de navegação global */}
        <header style={{ padding: "1rem" }}>
          <nav
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button className="custom-button" variant="text" href="/">
              Home
            </Button>
            <Button className="custom-button" variant="text" href="/dashboard">
              Dashboard
            </Button>
            <Button className="custom-button" variant="text">
              Projectos
            </Button>
            <Button className="custom-button" variant="text" href="/about">
              About
            </Button>
          </nav>
        </header>

        {/* Conteúdo das páginas */}
        <main style={{ padding: "1rem" }}>{children}</main>

        {/* Barra de rodapé */}
        <footer
          style={{ background: "#252422", padding: "1rem", marginTop: "2rem" }}
        >
          <p>© 2025 - Iasaldo</p>
        </footer>
      </body>
    </html>
  );
}
