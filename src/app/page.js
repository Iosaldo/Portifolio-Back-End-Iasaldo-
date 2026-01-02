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
import SkillsPanel from "@/components/dashboard/SkillsPanel";
// Page sections are implemented as local components below for clarity

function Hero() {
  return (
    <header className="hero">
      <div className="hero-left">
        <h1 className="hero-title">my portfólio</h1>
        <div style={{ marginTop: 40 }}>
          <button className="cta-outline">Software Engineering</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-oval">
          <img src="/avatar.jpg" alt="Iasaldo" />
        </div>
      </div>
    </header>
  );
}

function ProjectsSection() {
  return (
    <section id="projectos" className="section">
      <h3>Projectos</h3>
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
      <h3>Dashboard</h3>
      <div className="dashboard-main">
        <div className="projectos">
          <DashboardHeader />
          <StatsPanel />
          <SkillsPanel />
          <ChartsGrid />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section">
      <h3>Sobre</h3>
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
      <AboutSection />
    </main>
  );
}
