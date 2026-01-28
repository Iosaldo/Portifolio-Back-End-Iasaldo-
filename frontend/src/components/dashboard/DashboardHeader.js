"use client";

import { useProgressStore } from "@/store/useProgressStore";
import useLanguageStore from "@/store/useLanguageStore";
import "./DashboardHeader.css";

const TRANSLATIONS = {
  pt: {
    home: "Home",
    projects: "Projetos",
    skills: "Habilidades",
    education: "Educação",
    about: "Sobre Mim",
  },
  en: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    about: "About Me",
  },
};

export default function DashboardHeader() {
  const { progress } = useProgressStore();
  const { language, setLanguage } = useLanguageStore();
  const locked = progress < 100;
  const t = TRANSLATIONS[language];

  return (
    <header className="dashboard-header">
      <nav className="dashboard-nav">
        <button onClick={() => scrollToSection("top")}>{t.home}</button>
        <button onClick={() => scrollToSection("projectos")}>
          {t.projects}
        </button>
        <button onClick={() => scrollToSection("learning-focus")}>
          {t.skills}
        </button>
        <button onClick={() => scrollToSection("education")}>
          {t.education}
        </button>
        <button onClick={() => scrollToSection("about")}>{t.about}</button>
      </nav>

      {/* Language Toggle */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          display: "flex",
          gap: "8px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setLanguage("pt")}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            background: language === "pt" ? "#00d4d4" : "transparent",
            color: language === "pt" ? "#000" : "#fff",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "0.875rem",
            transition: "all 0.3s ease",
          }}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage("en")}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            background: language === "en" ? "#00d4d4" : "transparent",
            color: language === "en" ? "#000" : "#fff",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "0.875rem",
            transition: "all 0.3s ease",
          }}
        >
          EN
        </button>
      </div>
    </header>
  );
}

function scrollToSection(id) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
