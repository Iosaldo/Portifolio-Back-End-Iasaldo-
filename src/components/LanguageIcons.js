"use client";
import { BiLogoPostgresql } from "react-icons/bi";

import { SiPython, SiJavascript, SiNextdotjs, SiExpress } from "react-icons/si";
import { FaGit, FaGithub, FaJava, FaReact } from "react-icons/fa"; // Importa FaJava da coleção Font Awesome
import "./icons.css";

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
    <ul className="example-2 flex gap-10 justify-center flex-wrap">
      {languages.map((lang) => {
        const Icon = lang.icon;
        return (
          <li key={lang.name} className="icon-content">
            <a href="#" aria-label={lang.name}>
              <div
                className="filled"
                style={{ backgroundColor: lang.color }}
              ></div>
              <Icon size={48} color="currentColor" />
            </a>
            <div className="tooltip">
              <strong>{lang.name}</strong>
              <br />
              🟦 Prática: {lang.pratica}%<br />
              🟧 Lógica: {lang.logica}%<br />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
