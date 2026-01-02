"use client";
import "./home.css";
import { Avatar } from "@mui/material";
import SocialCard from "@/components/SocialCard";
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
import { Inter } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SplitText from "@/components/SplitText";
// About, Projectos and Dashboard contents inlined below

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function scrollDown() {
    if (typeof window !== "undefined") {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  }
  return (
    <main className="site-main">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="text-center">
            <SplitText>Bem-vindo! Que bom ter você aqui!</SplitText>
          </div>
          <div data-aos="fade-up">
            <Avatar
              alt="Iasaldo"
              src="/avatar.jpg"
              sx={{
                width: 170,
                height: 170,
                border: "3px solid var(--foreground)",
              }}
              className="avatarhome"
            />
          </div>
        </div>
      </div>

      <div className="hero-inner flex">
        <div className="text-center" data-aos="fade-up">
          <h1 className="hero-title">Iasaldo Batista</h1>
          <label className="hero-subtitle">Desenvolvedor Back-End</label>
          <p className="hero-description">
            Transfora em sistemas, ideias em APIs, e linhas de código em
            soluções que funcionam — simples, rápidas e seguras.
          </p>
        </div>
      </div>

      <section id="about" className="page-section">
        <AboutContent />
      </section>

      <section id="projectos" className="page-section">
        <ProjectosContent />
      </section>

      <section id="dashboard" className="page-section">
        <DashboardContent />
      </section>
    </main>
  );
}

/* ----- Inlined page contents ----- */
function AboutContent() {
  return (
    <section className="about-page">
      <div className="about-container">
        <Avatar
          alt="Iasaldo"
          src="/avatar.jpg"
          sx={{
            width: 170,
            height: 170,
            border: "3px solid var(--foreground)",
          }}
          className="avatar"
        />
        <div className="about-social-container">
          <SocialCard />
        </div>
      </div>
      <div className="card-stack card-stack--padded">
        <div className="stack-card">
          <h2 className="stack-title">Sobre Mim</h2>
          <div className="stack-content">
            <p>
              Desenvolvedor em formação, focado em criar soluções digitais
              funcionais, escaláveis e bem estruturadas. Tenho paixão por
              transformar ideias em aplicações que entregam valor real, com
              atenção à qualidade do código, organização e experiência do
              usuário. Estou comprometido com boas práticas de desenvolvimento e
              evolução contínua, sempre buscando experiência e técnica e
              profissional.
            </p>
          </div>
        </div>

        <div className="stack-card">
          <h2 className="stack-title">Especialidades</h2>
          <div className="stack-content">
            <div className="w-full">
              <div className="accordion">
                <div className="stack-card-inner">
                  <h3>Desenvolvimento Front-end</h3>
                  <ul>
                    <li>React.js para interfaces interativas</li>
                    <li>Next.js para aplicações web modernas e otimizadas</li>
                    <li>Styled Components e TailwindCSS</li>
                    <li>Implementação de animações e transições suaves</li>
                  </ul>
                </div>
                <div className="stack-card-inner">
                  <h3>Desenvolvimento Back-end</h3>
                  <ul>
                    <li>Node.js e Express para APIs RESTful</li>
                    <li>Async JavaScript and HTTP Request</li>
                    <li>Autenticação e Autorização</li>
                  </ul>
                </div>
                <div className="stack-card-inner">
                  <h3>Advanced Back-End</h3>
                  <ul>
                    <li>Controle de Versionamento com Git</li>
                    <li>SQL, PostgreSQL, Database to a Server</li>
                    <li>Deploy, JavaScript Testing</li>
                    <li>API Development with Swagger and OpenAPI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stack-card">
          <h2 className="stack-title">Desenvolvimento Profissional</h2>
          <div className="stack-content">
            <p>
              Busco constantemente aprender novas tecnologias e aplicar as
              melhores práticas de desenvolvimento em meus projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectosContent() {
  return (
    <section className="projectos-page">
      <Typography variant="h4" component="h1" gutterBottom>
        Projectos
      </Typography>
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
                inglês, voltada para falantes de português, com foco em
                aprendizagem prática, personalizada e acessível.
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
    </section>
  );
}

function DashboardContent() {
  return (
    <section className="dashboard-main">
      <div className="projectos">
        <DashboardHeader />
        <StatsPanel />
        <SkillsPanel />
        <ChartsGrid />
      </div>
    </section>
  );
}
