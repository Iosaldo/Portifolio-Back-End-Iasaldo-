"use client";

import Image from "next/image";
import useLanguageStore from "@/store/useLanguageStore";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Projetos",
    description:
      "API minimalista para posts rápidos, endpoints REST simples e pronta para deploy.",
  },
  en: {
    title: "Projects",
    description:
      "Minimalist API for quick posts, simple REST endpoints and ready for deployment.",
  },
};

export default function Projects() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <section id="projectos" className="section">
      <div className="projectos-page">
        <div className="projectos-left">
          <h3>{t.title}</h3>
        </div>
        <div className="projectos-right">
          <div className="projectos-grid">
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
              <div className="project-card-subtitle">{t.description}</div>
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
              <div className="project-card-subtitle">{t.description}</div>
              <hr className="project-card-divider" />
              <div className="project-card-footer">
                <div className="project-card-price"></div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
