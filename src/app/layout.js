// src/app/layout.js
"use client";
import { Avatar, Button, Stack } from "@mui/material";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ThemeProvider, useTheme } from "../components/ThemeProvider"; // Importe o provedor e o hook
import Switch from "../components/Switch";

function AppContent({ children }) {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use o hook para obter o estado e a função de alternância
  const router = useRouter();
  const pathname = usePathname();
  React.useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true });
  }, []);
  const isRestaurante = (pathname || "")
    .toLowerCase()
    .startsWith("/restaurantepage");

  return (
    <html lang="pt-BR" className={isDarkMode ? "dark" : "light"}>
      <body className={isRestaurante ? "resto-page" : undefined}>
        {/* Barra de navegação global (oculta na página Restaurante) */}
        {!isRestaurante && (
          <header
            style={{
              padding: "1rem",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              backdropFilter: "saturate(180%) blur(6px)",
              background: "rgba(0,0,0,0.25)",
            }}
          >
            <nav
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                onClick={() => router.push("/")}
                className="custom-button"
                variant="text"
              >
                Home
              </Button>
              <Button className="custom-button" variant="text">
                Dashboard
              </Button>
              <Button className="custom-button" variant="text">
                Project
              </Button>
              <Button className="custom-button" variant="text">
                Skills tracking
              </Button>
              <Button className="custom-button" variant="text">
                About
              </Button>

              {/* Dark Mode Toggle (custom Switch) */}
              <Switch />
            </nav>
          </header>
        )}

        {/* Conteúdo das páginas */}
        <main style={{ padding: "1rem", paddingTop: "88px" }}>{children}</main>

        {/* Barra de rodapé */}
        <footer>
          <Button href="/Iasaldo_CV.pdf" variant="outlined" download>
            Download CV
          </Button>
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
