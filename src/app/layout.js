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
      <body>
        {/* Barra de navegação global (oculta na página Restaurante) */}
        {!isRestaurante && (
          <header style={{ padding: "1rem" }}>
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
              <Button
                onClick={() => router.push("/dashboard")}
                className="custom-button"
                variant="text"
              >
                Dashboard
              </Button>
              <Button
                onClick={() => router.push("/projectos")}
                className="custom-button"
                variant="text"
              >
                Projectos
              </Button>
              <Button
                onClick={() => router.push("/about")}
                className="custom-button"
                variant="text"
              >
                About
              </Button>

              {/*Botão Portifolio Restaurante*/}
              <Button
                onClick={() => router.push("/RestaurantePage")}
                className="custom-button"
                variant="text"
                aria-label="Portifolio Restaurante"
              >
                <span>Portifolio Restaurante</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 74 74"
                  style={{ marginLeft: 8 }}
                >
                  <circle
                    strokeWidth="3"
                    stroke="black"
                    r="35.5"
                    cy="37"
                    cx="37"
                  ></circle>
                  <path
                    fill="black"
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  ></path>
                </svg>
              </Button>

              {/* Dark Mode Toggle (custom Switch) */}
              <Switch />
            </nav>
          </header>
        )}

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
