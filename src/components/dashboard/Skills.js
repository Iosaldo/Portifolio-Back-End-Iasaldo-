"use client";

import useLanguageStore from "@/store/useLanguageStore";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Habilidades",
  },
  en: {
    title: "Skills",
  },
};

export default function Skills() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <section id="learning-focus" className="section">
      <div className="learning-focus-page">
        <div className="learning-focus-left">
          <h3>{t.title}</h3>
        </div>
        <div className="learning-focus-right">
          <div className="skills-text-content">
            <div className="skill-category-text">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill-category-text">
              <h4>Database</h4>
              <ul>
                <li>SQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="skill-category-text">
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
