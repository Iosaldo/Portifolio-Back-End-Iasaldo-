"use client";
import "./home.css";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SkillsCard from "@/components/SkillsCard";
import Image from "next/image";
// Page sections are implemented as local components below for clarity

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <h1>
          Welcome to
          <br />
          my portfólio
        </h1>
        <button className="minimal-btn">Software Engineering</button>
        <div className="intro-block">
          <h2 className="intro-title">Who is Iasaldo?</h2>
          <p className="intro-text">
            Software Engineering student focused on Back‑End development, with
            hands‑on experience in JavaScript, Node.js, Express, REST APIs, and
            Git/GitHub, acquired through personal projects and continuous
            learning.
          </p>
          <div className="intro-underline" />
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
            <h4 className="edu-place">Codecademy</h4>
            <ul>
              <li>Back-End Engineer — Jun 2024 until now</li>
              <li>Developer in Training</li>
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
          <h3>Project</h3>
        </div>
        <div className="projectos-right">
          <div className="projectos-grid">
            <div className="project-card-modern">
              <div className="project-card-img">
                <div className="project-card-img-fill" />
              </div>
              <div className="project-card-title">Branding Tost</div>
              <div className="project-card-subtitle">
                Branding para Tost, restaurante famoso em São Paulo.
              </div>
              <hr className="project-card-divider" />
              <div className="project-card-footer">
                <div className="project-card-price"><span>PT</span> design</div>
                <button className="project-card-btn" aria-label="Ver projeto Tost">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img">
                    <path d="M80 112c0-8.8 7.2-16 16-16H416c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zm56 80c0-8.8 7.2-16 16-16H360c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16H360c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-8.8 0-16-7.2-16-16zm-56 80c0-8.8 7.2-16 16-16H416c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="project-card-modern">
              <div className="project-card-img">
                <div className="project-card-img-fill" />
              </div>
              <div className="project-card-title">Cartaz La Sso</div>
              <div className="project-card-subtitle">
                Cartaz para La Sso, um bar no centro de Curitiba.
              </div>
              <hr className="project-card-divider" />
              <div className="project-card-footer">
                <div className="project-card-price"><span>PT</span> design</div>
                <button className="project-card-btn" aria-label="Ver projeto La Sso">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img">
                    <path d="M80 112c0-8.8 7.2-16 16-16H416c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zm56 80c0-8.8 7.2-16 16-16H360c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16H360c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-8.8 0-16-7.2-16-16zm-56 80c0-8.8 7.2-16 16-16H416c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z" />
                  </svg>
                </button>
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
                API minimalista para posts rápidos, endpoints REST simples e pronta para deploy.
              </div>
              <hr className="project-card-divider" />
              <div className="project-card-footer">
                <div className="project-card-price"></div>
                <button className="project-card-btn" aria-label="Ver Quick-Post API">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img">
                    <path d="M80 112c0-8.8 7.2-16 16-16H416c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zm56 80c0-8.8 7.2-16 16-16H360c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16H360c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-8.8 0-16-7.2-16-16zm-56 80c0-8.8 7.2-16 16-16H416c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section id="dashboard" className="section">
      <div className="learning-focus-page">
        <div className="learning-focus-left">
          <h3>Learning Focus</h3>
        </div>
        <div className="learning-focus-right">
          <div className="learning-focus-controls">
            <DashboardHeader title="" />
          </div>
          <div className="learning-focus-charts">
            <SkillsCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section">
      <h3>Get in Touch</h3>
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
                  <h4 className="stack-title">Sobre Mim</h4>
                  <div className="stack-content">
                    <p>
                      Desenvolvedor em formação, focado em criar soluções
                      digitais funcionais, escaláveis e bem estruturadas. Tenho
                      paixão por transformar ideias em aplicações que entregam
                      valor real.
                    </p>
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

export default function Home() {
  return (
    <main className="site-main">
      <Hero />
      <ProjectsSection />
      <DashboardSection />
      <EducationSection />
      <AboutSection />
    </main>
  );
}
