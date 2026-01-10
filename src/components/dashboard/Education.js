"use client";

import useLanguageStore from "@/store/useLanguageStore";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Educação",
    codecademy: "Codecademy - Engenheiro Back-End",
    inProgress: "em andamento",
    ifac: "IFAC - Tecnologia da Informação",
    ifacDesc: "Curso Técnico e Profissional em Tecnologia da Informação",
    highSchool: "Liceu Nacional de São Tomé",
    highSchoolDesc: "Ensino Secundário, Ciências e Tecnologia",
  },
  en: {
    title: "Education",
    codecademy: "Codecademy - Back-End Engineer",
    inProgress: "in progress",
    ifac: "IFAC - Information Technology",
    ifacDesc: "Technical and Professional Course in Information Technology",
    highSchool: "National High School of São Tomé",
    highSchoolDesc: "Secondary Education, Science and Technology",
  },
};

export default function Education() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <section className="education-section">
      <div className="edu-left">
        <h2 className="edu-title">{t.title}</h2>
      </div>
      <div className="edu-right">
        <div className="edu-grid">
          <div className="edu-column">
            <h4 className="edu-place">{t.codecademy}</h4>
            <ul>
              <li>REST APIs</li>
              <li>Databases</li>
              <li>Authentication & Authorization ({t.inProgress})</li>
              <li>Backend fundamentals</li>
            </ul>
          </div>
          <div className="edu-column">
            <h4 className="edu-place">{t.ifac}</h4>
            <ul>
              <li>{t.ifacDesc}</li>
              <li>Jul 2021 – Out 2022</li>
            </ul>
          </div>
          <div className="edu-column">
            <h4 className="edu-place">{t.highSchool}</h4>
            <ul>
              <li>{t.highSchoolDesc}</li>
              <li>Set 2015 – Set 2018</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
