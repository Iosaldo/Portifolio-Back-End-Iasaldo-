"use client";

import { SiPython, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Importa FaJava da coleção Font Awesome
import "./icons.css";

const languages = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    pratica: 72,
    logica: 65,
    exame: 80,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    pratica: 60,
    logica: 55,
    exame: 70,
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#f89820",
    pratica: 68,
    logica: 62,
    exame: 75,
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
              🟩 Exame: {lang.exame}%
            </div>
          </li>
        );
      })}
    </ul>
  );
}
