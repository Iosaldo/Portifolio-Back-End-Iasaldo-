"use client";
import { BiLogoPostgresql } from "react-icons/bi";

import { SiPython, SiJavascript, SiNextdotjs, SiExpress } from "react-icons/si";
import { FaGit, FaGithub, FaJava, FaReact } from "react-icons/fa"; // Importa FaJava da coleção Font Awesome
import "./icons-dashboard.css";

const languages = [
  {
    name: "Express",
    icon: SiExpress,
    color: "#3776AB",
    pratica: 72,
    logica: 65,
  },
  {
    name: "Next",
    icon: SiNextdotjs,
    color: "#000000ff",
    pratica: 72,
    logica: 65,
  },
  {
    name: "Postgresql",
    icon: BiLogoPostgresql,
    color: "#3776AB",
    pratica: 72,
    logica: 65,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#0a0d0fff",
    pratica: 72,
    logica: 65,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    pratica: 60,
    logica: 55,
  },
  {
    name: "React",
    icon: FaReact,
    color: "#1900ffff",
    pratica: 68,
    logica: 62,
  },
];

export default function LanguageIcons() {
  return (
    <ul className="example-2 language-list">
      {languages.map((lang) => {
        const Icon = lang.icon;
        return (
          <li
            key={lang.name}
            className="icon-content language-item"
            style={{ "--lang-color": lang.color }}
          >
            <a
              href="#"
              aria-label={lang.name}
              data-social={lang.name.toLowerCase().replace(/[^a-z0-9]+/gi, "")}
            >
              <div className="filled"></div>
              <Icon size={48} color="currentColor" />
            </a>
            <div className="tooltip">
              <strong className="tooltip-title">{lang.name}</strong>
              <div className="tooltip-row">
                <span className="badge practice" aria-hidden></span>
                <span className="tooltip-text">Prática: {lang.pratica}%</span>
              </div>
              <div className="tooltip-row">
                <span className="badge logic" aria-hidden></span>
                <span className="tooltip-text">Lógica: {lang.logica}%</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
