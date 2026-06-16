"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useLanguageStore from "@/store/useLanguageStore";
import "./DashboardHeader.css";

const TRANSLATIONS = {
  pt: {
    home: "Início",
    projects: "Projetos",
    skills: "Competências",
    education: "Formação",
    certificates: "Certificações",
    allCertificates: "Todos os certificados",
    about: "Sobre",
  },
  en: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    certificates: "Certificates",
    allCertificates: "View all certificates",
    about: "About Me",
  },
};

export default function DashboardHeader() {
  const { language, setLanguage } = useLanguageStore();
  const pathname = usePathname();
  const router = useRouter();
  const t = TRANSLATIONS[language];

  const navigateToSection = (id) => {
    if (pathname === "/") {
      scrollToSection(id);
      return;
    }

    const target = id === "top" ? "/" : `/#${id}`;
    router.push(target);
  };

  return (
    <header className="dashboard-header">
      <nav className="dashboard-nav">
        <button onClick={() => navigateToSection("top")}>{t.home}</button>
        <button onClick={() => navigateToSection("projectos")}>
          {t.projects}
        </button>
        <button onClick={() => navigateToSection("learning-focus")}>
          {t.skills}
        </button>
        <button onClick={() => navigateToSection("education")}>
          {t.education}
        </button>
        <Link href="/certificados" className="dashboard-nav-link">
          {t.certificates}
        </Link>
        <button onClick={() => navigateToSection("about")}>{t.about}</button>
      </nav>

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
