"use client";

import CertificatesGrid from "@/components/dashboard/CertificatesGrid";
import useLanguageStore from "@/store/useLanguageStore";
import AnimatedContent from "@/components/AnimatedContent";
import AnimatedText from "@/components/AnimatedText";
import CertificateIcon from "@/components/icons/CertificateIcon";
import Link from "next/link";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Formação",
    certificatesTitle: "Certificações",
    viewAllCertificates: "Ver todos os certificados",
    codecademy: "Codecademy - Engenheiro Back-End",
    codecademyTopics: [
      "Desenvolvimento de APIs REST",
      "Modelagem e integração com bases de dados",
      "Autenticação e autorização",
      "Fundamentos de Back-End",
    ],
    ifac: "IFAC - Tecnologia da Informação",
    ifacDesc: "Curso Técnico-Profissional em Tecnologia da Informação",
    ifacDate: "Jul 2021 - Out 2022",
    highSchool: "Liceu Nacional de São Tomé",
    highSchoolDesc: "Ensino Secundário em Ciências e Tecnologia",
    highSchoolDate: "Set 2015 - Set 2018",
  },
  en: {
    title: "Education",
    certificatesTitle: "Certificates",
    viewAllCertificates: "View all certificates",
    codecademy: "Codecademy - Back-End Engineer",
    codecademyTopics: [
      "REST API development",
      "Database modeling and integration",
      "Authentication and authorization",
      "Back-End fundamentals",
    ],
    ifac: "IFAC - Information Technology",
    ifacDesc: "Technical and Professional Course in Information Technology",
    ifacDate: "Jul 2021 - Oct 2022",
    highSchool: "National High School of Sao Tome",
    highSchoolDesc: "Secondary Education, Science and Technology",
    highSchoolDate: "Sep 2015 - Sep 2018",
  },
};

export default function Education() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <section id="education" className="education-section">
      <div className="edu-formation-page">
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

        <div className="edu-grid-row">
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
                  {t.codecademyTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
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
                  <li>{t.ifacDate}</li>
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
                  <li>{t.highSchoolDate}</li>
                </ul>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>

      <AnimatedContent
        delay={1.2}
        distance={100}
        duration={0.6}
        direction="vertical"
      >
        <div id="certificates" className="certificates-section">
          <h3 className="certificates-title">
            <CertificateIcon
              size={34}
              className="certificates-title-icon"
            />
            {t.certificatesTitle}
          </h3>
          <CertificatesGrid limit={2} />
          <Link href="/certificados" className="certificates-page-link">
            <CertificateIcon size={18} />
            {t.viewAllCertificates}
          </Link>
        </div>
      </AnimatedContent>
    </section>
  );
}
