"use client";

import useLanguageStore from "@/store/useLanguageStore";
import AnimatedContent from "@/components/AnimatedContent";
import AnimatedText from "@/components/AnimatedText";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Educação",
    certificatesTitle: "Certificados",
    codecademy: "Codecademy - Engenheiro Back-End",
    inProgress: "em andamento",
    ifac: "IFAC - Tecnologia da Informação",
    ifacDesc: "Curso Técnico e Profissional em Tecnologia da Informação",
    highSchool: "Liceu Nacional de São Tomé",
    highSchoolDesc: "Ensino Secundário, Ciências e Tecnologia",
  },
  en: {
    title: "Education",
    certificatesTitle: "Certificates",
    codecademy: "Codecademy - Back-End Engineer",
    inProgress: "in progress",
    ifac: "IFAC - Information Technology",
    ifacDesc: "Technical and Professional Course in Information Technology",
    highSchool: "National High School of São Tomé",
    highSchoolDesc: "Secondary Education, Science and Technology",
  },
};

const CERTIFICATES = {
  pt: [
    {
      id: 1,
      title: "JavaScript Intermediário",
      institution: "Codecademy",
      date: "2024",
      link: "#",
    },
    {
      id: 2,
      title: "Backend com Node.js",
      institution: "Codecademy",
      date: "2024",
      link: "#",
    },
    // Adicione mais certificados aqui
  ],
  en: [
    {
      id: 1,
      title: "Intermediate JavaScript",
      institution: "Codecademy",
      date: "2024",
      link: "#",
    },
    {
      id: 2,
      title: "Backend with Node.js",
      institution: "Codecademy",
      date: "2024",
      link: "#",
    },
    // Add more certificates here
  ],
};

export default function Education() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];
  const certificates = CERTIFICATES[language];

  return (
    <section id="education" className="education-section">
      <AnimatedContent
        direction="horizontal"
        reverse={true}
        distance={80}
        duration={1}
      >
        <div className="edu-left">
          <AnimatedText text={t.title} className="edu-title" as="h2" />
        </div>
      </AnimatedContent>
      <div className="edu-right">
        <div className="edu-grid">
          <AnimatedContent
            delay={0.3}
            distance={100}
            duration={0.6}
            direction="horizontal"
          >
            <div className="edu-column">
              <h4 className="edu-place">{t.codecademy}</h4>
              <ul>
                <li>REST APIs</li>
                <li>Databases</li>
                <li>Authentication & Authorization ({t.inProgress})</li>
                <li>Backend fundamentals</li>
              </ul>
            </div>
          </AnimatedContent>
          <AnimatedContent
            delay={0.6}
            distance={100}
            duration={0.6}
            direction="horizontal"
          >
            <div className="edu-column">
              <h4 className="edu-place">{t.ifac}</h4>
              <ul>
                <li>{t.ifacDesc}</li>
                <li>Jul 2021 – Out 2022</li>
              </ul>
            </div>
          </AnimatedContent>
          <AnimatedContent
            delay={0.9}
            distance={100}
            duration={0.6}
            direction="horizontal"
          >
            <div className="edu-column">
              <h4 className="edu-place">{t.highSchool}</h4>
              <ul>
                <li>{t.highSchoolDesc}</li>
                <li>Set 2015 – Set 2018</li>
              </ul>
            </div>
          </AnimatedContent>
        </div>

        {/* Seção de Certificados */}
        <AnimatedContent
          delay={1.2}
          distance={100}
          duration={0.6}
          direction="vertical"
        >
          <div id="certificates" className="certificates-section">
            <h3 className="certificates-title">{t.certificatesTitle}</h3>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <AnimatedContent
                  key={cert.id}
                  delay={1.4 + index * 0.2}
                  distance={50}
                  duration={0.5}
                  direction="horizontal"
                >
                  <div className="certificate-card">
                    <h5 className="cert-title">{cert.title}</h5>
                    <p className="cert-institution">{cert.institution}</p>
                    <p className="cert-date">{cert.date}</p>
                    {cert.link && cert.link !== "#" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        Ver certificado
                      </a>
                    )}
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
