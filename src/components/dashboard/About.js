"use client";

import AnimatedContent from "@/components/AnimatedContent";
import AnimatedText from "@/components/AnimatedText";
import Button from "@/components/ui/Button";
import useLanguageStore from "@/store/useLanguageStore";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../../app/home.css";

const RESUME_PATH = "/resume.pdf";
const DOWNLOAD_RESUME_FILENAME = "Iasaldo-Batista-Backend-Resume.pdf";

const TRANSLATIONS = {
  pt: {
    title: "Sobre mim",
    description:
      "Tenho construído projetos pequenos, mas completos: gestão de turnos, sistema de feedback e uma API de publicações. O que mais me interessa no back-end é transformar regras de negócio em endpoints simples de manter, com validação, base de dados e documentação clara. O próximo passo é trabalhar com uma equipa, ler código de produção e assumir tarefas de API, correção de bugs e integração.",
    resume: "Resume",
    downloadResume: "Baixar currículo",
  },
  en: {
    title: "About Me",
    description:
      "I have been building small but complete projects: shift management, a feedback system and a posts API. What I enjoy in backend work is turning business rules into maintainable endpoints with validation, database persistence and clear documentation. My next step is working with a team, reading production code and taking ownership of API tasks, bug fixes and integrations.",
    resume: "Resume",
    downloadResume: "Download resume",
  },
};

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Iosaldo",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/iasaldo-batista",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "mailto:iyosaldonbk@gmail.com",
    label: "Email",
    icon: MdEmail,
  },
];

export default function About() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  const handleDownloadResume = async () => {
    try {
      const response = await fetch(RESUME_PATH);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = DOWNLOAD_RESUME_FILENAME;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="about" className="section">
      <AnimatedContent
        direction="horizontal"
        reverse={true}
        distance={80}
        duration={1}
      >
        <AnimatedText text={t.title} as="h3" />
      </AnimatedContent>
      <div className="about-page">
        <div className="about-container">
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 720 }}>
              <AnimatedContent
                direction="vertical"
                distance={60}
                duration={0.8}
                delay={0.3}
              >
                <div className="card-stack card-stack--padded">
                  <div className="stack-card">
                    <div className="stack-content">
                      <p>{t.description}</p>
                      <div className="social-links">
                        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                          <a
                            key={href}
                            href={href}
                            target={
                              href.startsWith("mailto:") ? undefined : "_blank"
                            }
                            rel={
                              href.startsWith("mailto:")
                                ? undefined
                                : "noreferrer"
                            }
                            className="social-link"
                            aria-label={label}
                          >
                            <Icon aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                      <div className="cv-actions">
                        <Button
                          href={RESUME_PATH}
                          target="_blank"
                          rel="noreferrer"
                          iconDirection="right"
                        >
                          {t.resume}
                        </Button>
                        <Button
                          type="button"
                          onClick={handleDownloadResume}
                          iconDirection="down"
                        >
                          {t.downloadResume}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
