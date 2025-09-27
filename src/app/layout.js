// src/app/layout.js
"use client";
import { Avatar, Button, Stack, FormControlLabel, Switch } from "@mui/material";
import "./globals.css";
import Link from "next/link";
import * as React from "react";
import { ThemeProvider, useTheme } from "../components/ThemeProvider"; // Importe o provedor e o hook

// Remova a exportação de metadados daqui, pois ela precisa estar em um componente de servidor
// export const metadata = {
//   title: "Portifolio Iasaldo",
//   description: "Site de exemplo com layout global",
// };

function AppContent({ children }) {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use o hook para obter o estado e a função de alternância

  return (
    <html lang="pt" className={isDarkMode ? "dark" : "light"}>
      {/* Adicione a classe 'dark' ou 'light' ao html */}
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
            <Button className="custom-button" variant="text" href="/projectos">
              Projectos
            </Button>
            <Button className="custom-button" variant="text" href="/about">
              About
            </Button>

            {/*Botão de alternância para o modo escuro*/}
            <FormControlLabel
              control={
                <Switch checked={isDarkMode} onChange={toggleDarkMode} />
              } // Conecte o estado e o evento onChange
            />
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

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <AppContent>{children}</AppContent>
    </ThemeProvider>
  );
}
