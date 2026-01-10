"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useLanguageStore from "@/store/useLanguageStore";

const TRANSLATIONS = {
  pt: {
    welcome: "Bem-vindo ao Meu Portfólio!",
    description:
      "Complete o quiz de programação para desbloquear o portfólio →",
    lockTitle: "🔒 Portfólio Bloqueado",
    lockMessage:
      "Complete o desafio para desbloquear o portfólio completo!",
    startChallenge: "Iniciar Desafio",
  },
  en: {
    welcome: "Welcome to my Portfolio!",
    description: "Complete the quiz to unlock the portfolio →",
    lockTitle: "🔒 Portfolio Locked",
    lockMessage:
      "Complete the programming challenge to unlock the full content!",
    startChallenge: "Start Challenge",
  },
};

export default function SiteLocked() {
  const [showAlert, setShowAlert] = useState(true);
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    // Mostra o alerta após 1 segundo
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#000",
        color: "#fff",
        padding: "40px",
        position: "relative",
      }}
    >
      {/* Alerta animado */}
      {showAlert && (
        <Link href="/challenge" style={{ textDecoration: "none" }}>
          <div
            style={{
              position: "fixed",
              top: "100px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #00d4d4, #00a8a8)",
              color: "#000",
              padding: "20px 40px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0, 212, 212, 0.3)",
              animation: "slideDown 0.5s ease, pulse 2s infinite",
              zIndex: 1001,
              maxWidth: "90%",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-50%, -5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(-50%)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span style={{ fontSize: "2rem" }}>🎯</span>
              <div>
                <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                  {t.welcome}
                </div>
                <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                  {t.description}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowAlert(false);
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#000",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "0 10px",
                }}
              >
                ✕
              </button>
            </div>
          </div>
        </Link>
      )}

      <h1>{t.lockTitle}</h1>

      <p style={{ maxWidth: 500, opacity: 0.7, marginTop: "20px" }}>
        {t.lockMessage}
      </p>

      <Link href="/challenge">
        <button
          style={{
            marginTop: 30,
            padding: "14px 28px",
            borderRadius: 30,
            border: "1px solid white",
            background: "transparent",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#00d4d4";
            e.target.style.color = "#000";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "white";
            e.target.style.transform = "scale(1)";
          }}
        >
          🧠 {t.startChallenge}
        </button>
      </Link>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 10px 30px rgba(0, 212, 212, 0.3);
          }
          50% {
            box-shadow: 0 10px 40px rgba(0, 212, 212, 0.6);
          }
        }
      `}</style>
    </div>
  );
}
