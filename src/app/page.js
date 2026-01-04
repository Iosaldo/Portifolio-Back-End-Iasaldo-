"use client";
import "./home.css";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsPanel from "@/components/dashboard/StatsPanel";
import ChartsGrid from "@/components/dashboard/ChartsGrid";
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
      <h3>Project</h3>
      <div className="projectos-page">
        <Box className="projectos-grid">
          <Card className="project-card" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/aderito-projecto.jpg"
                alt="Adérito Projecto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Adérito Projecto
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  O Learn English Aderito é uma plataforma digital de ensino de
                  inglês, voltada para falantes de português.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saber Mais
              </Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section id="dashboard" className="section">
      <h3>Skills tracking</h3>
      <div className="dashboard-main">
        <div className="projectos">
          <DashboardHeader />
          <StatsPanel />
          <ChartsGrid />
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
