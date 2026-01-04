// src/app/layout.js
"use client";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import * as React from "react";
import { useRouter, usePathname } from "next/navigation";

function AppContent({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  React.useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true });
  }, []);
  const isRestaurante = (pathname || "")
    .toLowerCase()
    .startsWith("/restaurantepage");

  return (
    <html lang="pt-BR" className={"light"}>
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
              <button
                onClick={() => router.push("/")}
                className="custom-button"
              >
                Home
              </button>
              <button className="custom-button">Dashboard</button>
              <button className="custom-button">Project</button>
              <button className="custom-button">Skills tracking</button>
              <button className="custom-button">About</button>
            </nav>
          </header>
        )}

        {/* Conteúdo das páginas */}
        <main style={{ padding: "1rem", paddingTop: "88px" }}>{children}</main>

        {/* Barra de rodapé */}
        <footer>
          <a href="/Iasaldo_CV.pdf" download>
            Download CV
          </a>
          <p>© 2025 - Iasaldo</p>
        </footer>
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return <AppContent>{children}</AppContent>;
}
