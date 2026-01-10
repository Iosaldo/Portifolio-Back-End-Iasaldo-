"use client";

import Image from "next/image";
import useLanguageStore from "@/store/useLanguageStore";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    badge: "Estudante de Desenvolvedor Back-End",
    intro:
      "Construindo APIs REST com Node.js, Express e SQL através de projetos práticos.",
    viewProjects: "Ver Projetos",
  },
  en: {
    badge: "Back-End Developer Student",
    intro:
      "Building REST APIs with Node.js, Express, and SQL through hands-on projects.",
    viewProjects: "View Projects",
  },
};

export default function Hero() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <div className="container">
      <div className="hero">
        <h1 className="hero-title">Iasaldo</h1>
        <span className="hero-badge">{t.badge}</span>
        <div className="intro-block">
          <p className="intro-text">{t.intro}</p>
          <a href="#projectos" className="minimal-btn">
            {t.viewProjects}
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="avatar-wrapper">
          <Image
            src="/avatar.jpg"
            alt="Profile"
            width={420}
            height={560}
            style={{
              objectFit: "cover",
              filter: "grayscale(1)",
              background: "#111",
              display: "block",
              transform: "rotate(-12deg)",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
