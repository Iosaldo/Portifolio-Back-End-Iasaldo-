"use client";

import AnimatedContent from "@/components/AnimatedContent";
import AnimatedText from "@/components/AnimatedText";
import useLanguageStore from "@/store/useLanguageStore";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Projetos",
    stackLabel: "Stack usada",
    frontLabel: "Front-end",
    backLabel: "Back-end",
    roleLabel: "Meu papel",
    featuresLabel: "Destaques técnicos",
    statusLabel: "Estado",
    shiftSyncTitle: "ShiftSync - Gestão de Turnos",
    shiftSyncDescription:
      "Sistema para restaurantes organizarem escalas, equipas, ausências e trocas de turno sem depender de folhas soltas.",
    shiftSyncDetails: {
      role: "Planeamento da arquitetura, modelação das regras de negócio, organização das telas e integração do fluxo de gestão.",
      status:
        "Protótipo funcional publicado; próximo passo é abrir documentação técnica e melhorar testes/API docs.",
      features: [
        "Fluxo para gestão de turnos, trocas e ausências",
        "Estrutura preparada para autenticação JWT e perfis de acesso",
        "Interface responsiva para operação diária",
        "Deploy publicado para validação do produto",
      ],
    },
    quickPostDescription:
      "API REST para criação e gestão de publicações, estruturada por rotas, controllers e services.",
    quickPostDetails: {
      role: "Desenho da API, implementação de endpoints, validação de dados e organização da arquitetura back-end.",
      status:
        "Projeto funcional em evolução para autenticação, testes automatizados e documentação pública.",
      features: [
        "Endpoints REST organizados",
        "CRUD de publicações",
        "Validação de dados de entrada",
        "Arquitetura em camadas preparada para deploy",
      ],
    },
    portfolioTitle: "Portfólio & Sistema de Feedback",
    portfolioDescription:
      "Portfólio pensado como vitrine técnica: projetos back-end, currículo, contacto e links que ajudam a avaliar código rapidamente.",
    portfolioDetails: {
      role: "Organização do conteúdo técnico, integração do currículo, SEO básico e melhoria da apresentação profissional.",
      status:
        "Projeto ativo e atualizado conforme evolução dos projetos e candidaturas.",
      features: [
        "Interface bilingue",
        "Currículo integrado em PDF",
        "Secções de projetos, competências e formação",
        "Links diretos para GitHub, LinkedIn e contacto",
      ],
    },
    aderitoDescription:
      "Plataforma web educacional para apoio ao ensino de inglês para falantes de português.",
    aderitoDetails: {
      role: "Construção da interface, organização das secções e adaptação da experiência para alunos.",
      status:
        "Projeto de apresentação que demonstra domínio de interface e colaboração com front-end.",
      features: [
        "Página responsiva",
        "Conteúdo organizado por secções",
        "Navegação simples",
        "Experiência pensada para leitura simples",
      ],
    },
    githubLabel: "Abrir repositório no GitHub",
    websiteLabel: "Abrir projeto online",
  },
  en: {
    title: "Projects",
    stackLabel: "Stack used",
    frontLabel: "Front-end",
    backLabel: "Back-end",
    roleLabel: "My role",
    featuresLabel: "Technical highlights",
    statusLabel: "Status",
    shiftSyncTitle: "ShiftSync - Shift Management",
    shiftSyncDescription:
      "Restaurant system for organizing schedules, teams, absences and shift swaps without relying on scattered spreadsheets.",
    shiftSyncDetails: {
      role: "Planned the architecture, modeled business rules, organized the main screens and integrated the management flow.",
      status:
        "Functional prototype published; next step is public technical documentation and stronger tests/API docs.",
      features: [
        "Workflow for shift scheduling, swaps and absences",
        "Structure prepared for JWT authentication and role-based access",
        "Responsive interface for daily operations",
        "Live deployment for product validation",
      ],
    },
    quickPostDescription:
      "REST API for creating and managing posts, structured by routes, controllers and services.",
    quickPostDetails: {
      role: "Designed the API, implemented endpoints, handled data validation and organized the back-end architecture.",
      status:
        "Functional project evolving toward authentication, automated tests and public documentation.",
      features: [
        "Organized REST endpoints",
        "Post CRUD",
        "Input data validation",
        "Layered architecture prepared for deployment",
      ],
    },
    portfolioTitle: "Portfolio & Feedback System",
    portfolioDescription:
      "Technical portfolio built to make code review easier: back-end projects, resume access, contact routes and useful links.",
    portfolioDetails: {
      role: "Organized technical content, integrated the CV, configured basic SEO and improved the professional presentation.",
      status:
        "Active project updated as projects and job applications evolve.",
      features: [
        "Bilingual interface",
        "Integrated PDF resume",
        "Projects, skills and education sections",
        "Direct GitHub, LinkedIn and contact links",
      ],
    },
    aderitoDescription:
      "Educational web platform designed to support English learning for Portuguese speakers.",
    aderitoDetails: {
      role: "Built the interface, organized the sections and adapted the experience for students.",
      status:
        "Presentation project that demonstrates interface work and frontend collaboration.",
      features: [
        "Responsive page",
        "Content organized by sections",
        "Simple navigation",
        "Simple reading experience",
      ],
    },
    githubLabel: "Open GitHub repository",
    websiteLabel: "Open live project",
  },
};

const IMAGE_SIZES = "(max-width: 480px) 100vw, (max-width: 900px) 220px, 100px";
const CARD_MOTION = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.03 },
  tap: { scale: 0.98 },
};
const CARD_TRANSITION = { type: "spring", stiffness: 260, damping: 24 };

export default function Projects() {
  const { language } = useLanguageStore();
  const [openProjectId, setOpenProjectId] = useState(null);
  const t = TRANSLATIONS[language];
  const projects = getProjects(t);
  const activeProject = projects.find(
    (project) => project.id === openProjectId,
  );

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
            <AnimatedText text={t.title} as="h3" />
          </div>
        </AnimatedContent>

        <div className="projectos-right">
          <div className="projectos-grid">
            {projects.map((project, index) => (
              <AnimatedContent
                key={project.id}
                delay={0.3 + index * 0.3}
                distance={100}
                duration={0.6}
                direction="horizontal"
              >
                <motion.article
                  className="project-card-modern"
                  layout
                  variants={CARD_MOTION}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  transition={CARD_TRANSITION}
                  onClick={() => setOpenProjectId(project.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="project-card-img">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={400}
                      height={300}
                      sizes={IMAGE_SIZES}
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="project-card-title">{project.title}</div>
                  <div className="project-card-subtitle">
                    {project.description}
                  </div>

                  <hr className="project-card-divider" />
                </motion.article>
              </AnimatedContent>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="project-dialog-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpenProjectId(null)}
            >
              <motion.div
                className="project-dialog"
                initial={{ y: 24, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 24, opacity: 0, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`project-dialog-title-${activeProject.id}`}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="project-dialog-header">
                  <div>
                    <h3 id={`project-dialog-title-${activeProject.id}`}>
                      {activeProject.title}
                    </h3>
                    <p>{activeProject.description}</p>
                  </div>
                  <button
                    type="button"
                    className="project-dialog-close"
                    onClick={() => setOpenProjectId(null)}
                    aria-label="Close project details"
                  >
                    ×
                  </button>
                </div>

                <div className="project-dialog-body">
                <div className="project-card-detail">
                  <span className="project-card-detail-label">
                    {t.stackLabel}
                  </span>
                  <div className="project-stack-breakdown">
                    <div className="project-stack-item">
                      <span className="project-stack-sublabel">
                        {t.frontLabel}
                      </span>
                      <p>{activeProject.stack.frontend}</p>
                    </div>
                    <div className="project-stack-item">
                      <span className="project-stack-sublabel">
                        {t.backLabel}
                      </span>
                      <p>{activeProject.stack.backend}</p>
                    </div>
                  </div>
                </div>
                  <ProjectDetail label={t.roleLabel}>
                    {activeProject.details.role}
                  </ProjectDetail>
                  <ProjectDetail label={t.statusLabel}>
                    {activeProject.details.status}
                  </ProjectDetail>
                  <div className="project-card-detail">
                    <span className="project-card-detail-label">
                      {t.featuresLabel}
                    </span>
                    <ul className="project-card-detail-list">
                      {activeProject.details.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {activeProject.links.length > 0 && (
                  <div className="project-dialog-actions">
                    {activeProject.links.map((link) => (
                      <motion.a
                        key={link.href}
                        className="project-card-btn"
                        aria-label={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.94 }}
                      >
                        {link.icon ? (
                          <Image
                            src={link.icon}
                            alt=""
                            width={18}
                            height={18}
                            loading="lazy"
                            style={{ objectFit: "contain" }}
                          />
                        ) : (
                          link.label
                        )}
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectDetail({ label, children }) {
  return (
    <div className="project-card-detail">
      <span className="project-card-detail-label">{label}</span>
      <p>{children}</p>
    </div>
  );
}

function getProjects(t) {
  return [
    {
      id: "shift-sync",
      title: t.shiftSyncTitle,
      description: t.shiftSyncDescription,
      stack: {
        frontend: "Next.js, React",
        backend: "Node.js, Express, PostgreSQL",
      },
      details: t.shiftSyncDetails,
      image: "/shiftsync-project-cover.png",
      imageAlt: t.shiftSyncTitle,
      links: [
        {
          href: "https://gestao-de-turnos.vercel.app",
          icon: "/globe.svg",
          label: t.websiteLabel,
        },
      ],
    },
    {
      id: "quick-post-api",
      title: "Quick-Post API",
      description: t.quickPostDescription,
      stack: {
        frontend: "Postman",
        backend: "Node.js, Express, REST API",
      },
      details: t.quickPostDetails,
      image: "/API.jpg",
      imageAlt: "Quick-Post API",
      links: [
        {
          href: "https://github.com/Iosaldo/Quick-Post-API.git",
          icon: "/github-icon-2.svg",
          label: t.githubLabel,
        },
      ],
    },
    {
      id: "portfolio",
      title: t.portfolioTitle,
      description: t.portfolioDescription,
      stack: {
        frontend: "Next.js, React",
        backend: "Node.js, SEO, Vercel",
      },
      details: t.portfolioDetails,
      image: "/avatar.jpg",
      imageAlt: t.portfolioTitle,
      links: [
        {
          href: "https://portifolio-iyosaldo.vercel.app/",
          icon: "/globe.svg",
          label: t.websiteLabel,
        },
        {
          href: "https://github.com/Iosaldo/Portifolio-Back-End-Iasaldo-",
          icon: "/github-icon-2.svg",
          label: t.githubLabel,
        },
      ],
    },
    {
      id: "learn-english",
      title: "Learn English",
      description: t.aderitoDescription,
      stack: {
        frontend: "React, Next.js, UI",
        backend: "—",
      },
      details: t.aderitoDetails,
      image: "/aderito-projecto.jpg",
      imageAlt: "Aderito Project",
      links: [],
    },
  ];
}
