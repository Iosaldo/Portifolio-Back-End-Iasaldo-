"use client";
import "./home.css";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsPanel from "@/components/dashboard/StatsPanel";
import PieChartCard from "@/components/charts/PieChartCard";
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

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-left">
        <h2 className="intro-title">Who is Iasaldo?</h2>
        <p className="intro-text">
          Software Engineering student focused on Back‑End development, with
          hands‑on experience in JavaScript, Node.js, Express, REST APIs, and
          Git/GitHub, acquired through personal projects and continuous
          learning.
        </p>
        <div className="intro-underline" />
      </div>
      <div className="intro-right">
        <div className="intro-avatar-wrapper">
          <Image
            src="/avatar.jpg"
            alt="Iasaldo reading"
            width={520}
            height={680}
            style={{ objectFit: "cover", filter: "grayscale(1)" }}
            priority
          />
        </div>
      </div>
    </section>
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
            <div className="project-card simple-card">
              <div className="project-thumb">
                <img src="/aderito-projecto.jpg" alt="Branding Tost" />
              </div>
              <p className="project-desc">
                Branding para Tost, restaurante famoso em São Paulo
              </p>
            </div>

            <div className="project-card simple-card">
              <div className="project-thumb">
                <img src="/aderito-projecto.jpg" alt="Cartaz La Sso" />
              </div>
              <p className="project-desc">
                Cartaz para La Sso, um bar no centro de Curitiba
              </p>
            </div>

            <div className="project-card simple-card">
              <div className="project-thumb">
                <img src="/aderito-projecto.jpg" alt="Cartaz Cinema" />
              </div>
              <p className="project-desc">
                Cartaz para a Sociedade de Cinema Brasil
              </p>
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
      <div className="dashboard-page">
        <div className="dashboard-left">
          <h3>Skills tracking</h3>
        </div>
        <div className="dashboard-right">
          <div className="dashboard-controls">
            <DashboardHeader />
            <StatsPanel />
          </div>
          <div className="dashboard-charts">
            <PieChartCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section">
      <h3>Contact me</h3>
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
      <IntroSection />
      <EducationSection />
      <ProjectsSection />
      <DashboardSection />
      <AboutSection />
    </main>
  );
}
