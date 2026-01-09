"use client";

import { useProgressStore } from "@/store/useProgressStore";
import SiteLocked from "@/components/SiteLocked";
import Image from "next/image";

// teus componentes reais:
import Hero from "@/components/dashboard/Hero";
import Projects from "@/components/dashboard/Projects";
import Skills from "@/components/dashboard/Skills";
import Education from "@/components/dashboard/Education";
import About from "@/components/dashboard/About";

export default function Home() {
  const { progress } = useProgressStore();

  // 🔒 MODO BLOQUEADO
  if (progress < 100) {
    return (
      <>
        <Hero />
        <SiteLocked />
      </>
    );
  }

  // 🔓 MODO COMPLETO
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <About />
    </>
  );
}

function OldHero() {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="hero-title">Iasaldo</h1>
        <span className="hero-badge">Back-End Developer Student</span>
        <div className="intro-block">
          <p className="intro-text">
            Building REST APIs with Node.js, Express, and SQL through hands-on
            projects.
          </p>
          <a href="#projectos" className="minimal-btn">
            View Projects
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="avatar-wrapper">
          <Image
            src="/avatar.jpg"
            alt="Profile"
            width={420}
            height={560}
            style={{
              objectFit: "cover",
              filter: "grayscale(1)",
              background: "#111",
              display: "block",
              transform: "rotate(-12deg)",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <section className="education-section">
      <div className="edu-left">
        <h2 className="edu-title">Education</h2>
      </div>
      <div className="edu-right">
        <div className="edu-grid">
          <div className="edu-column">
            <h4 className="edu-place">Codecademy - Back-End Engineer</h4>
            <ul>
              <li>REST APIs</li>
              <li>Databases</li>
              <li>Authentication & Authorization (in progress) </li>
              <li>Backend fundamentals</li>
            </ul>
          </div>
          <div className="edu-column">
            <h4 className="edu-place">IFAC - Information Technology</h4>
            <ul>
              <li>
                Technical and Professional Course in Information Technology
              </li>
              <li>Jul 2021 – Out 2022</li>
            </ul>
          </div>
          <div className="edu-column">
            <h4 className="edu-place">National High School of São Tomé</h4>
            <ul>
              <li>Secondary Education, Science and Technology</li>
              <li>Set 2015 – Set 2018</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projectos" className="section">
      <div className="projectos-page">
        <div className="projectos-left">
          <h3>Projects</h3>
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
              <div className="project-card-subtitle">
                API minimalista para posts rápidos, endpoints REST simples e
                pronta para deploy.
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
                API minimalista para posts rápidos, endpoints REST simples e
                pronta para deploy.
              </div>
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

function LearningFocus() {
  return (
    <section id="learning-focus" className="section">
      <div className="learning-focus-page">
        <div className="learning-focus-left">
          <h3>Skills</h3>
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

function AboutSection() {
  return (
    <section id="about" className="section">
      <h3>About Me</h3>
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
              <div className="card-stack card-stack--padded">
                <div className="stack-card">
                  <div className="stack-content">
                    <p>
                      Desenvolvedor Back-End em formação, focado na construção
                      de APIs REST bem estruturadas e escaláveis. Atualmente em
                      busca de uma oportunidade de estágio para evoluir em
                      ambiente profissional.
                    </p>
                    <div className="social-links">
                      <a
                        href="https://github.com/Iosaldo"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/iasaldo"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="mailto:iyosaldonbk@gmail.com"
                        className="social-link"
                        aria-label="Email"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
