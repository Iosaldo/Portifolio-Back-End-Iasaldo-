"use client";
import { gsap } from "gsap";
import Image from "next/image";
import useLanguageStore from "@/store/useLanguageStore";
import AnimatedText from "@/components/AnimatedText";
import AnimatedContent from "@/components/AnimatedContent";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Projetos",
    quickPostDescription:
      "API minimalista para posts rápidos, endpoints REST simples e pronta para deploy.",
    aderitoDescription:
      "Plataforma simples e atrativa para ajudar pessoas (especialmente lusófonas) a aprender inglês com apoio do professor Aderito.",
  },
  en: {
    title: "Projects",
    quickPostDescription:
      "Minimalist API for quick posts, simple REST endpoints and ready for deployment.",
    aderitoDescription:
      "Simple and attractive platform to help people (especially Portuguese speakers) learn English with support from teacher Aderito.",
  },
};

export default function Projects() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <section id="projectos" className="section">
      <div className="projectos-page">
        <AnimatedContent
          direction="horizontal"
          reverse={true}
          distance={80}
          duration={1}
        >
          <div className="projectos-left">
            <AnimatedText text={t.title} className="" as="h3" />
          </div>
        </AnimatedContent>
        <div className="projectos-right">
          <div className="projectos-grid">
            <AnimatedContent
              delay={0.3}
              distance={100}
              duration={0.6}
              direction="horizontal"
            >
              <div className="project-card-modern">
                <div className="project-card-img">
                  <Image
                    src="/API.jpg"
                    alt="Quick-Post API"
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="project-card-title">Quick-Post API</div>
                <div className="project-card-subtitle">
                  {t.quickPostDescription}
                </div>
                <hr className="project-card-divider" />
                <div className="project-card-footer">
                  <div className="project-card-price">Node,Express</div>
                  <a
                    className="project-card-btn"
                    aria-label="Ver Quick-Post API no GitHub"
                    href="https://github.com/Iosaldo/Quick-Post-API.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/github-icon-2.svg"
                      alt="GitHub"
                      width={18}
                      height={18}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent
              delay={0.6}
              distance={100}
              duration={0.6}
              direction="horizontal"
            >
              <div className="project-card-modern">
                <div className="project-card-img">
                  <Image
                    src="/aderito-projecto.jpg"
                    alt="Aderito Project"
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="project-card-title">Aderito Project</div>
                <div className="project-card-subtitle">
                  {t.aderitoDescription}
                </div>
                <hr className="project-card-divider" />
                <div className="project-card-footer">
                  <div className="project-card-price">React, Next.js</div>
                  <a
                    className="project-card-btn"
                    aria-label="Ver Quick-Post API no GitHub"
                    href="https://github.com/Iosaldo/Quick-Post-API.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/github-icon-2.svg"
                      alt="GitHub"
                      width={18}
                      height={18}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
