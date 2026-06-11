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
    detailsLabel: "Detalhes",
    hideDetailsLabel: "Ocultar",
    stackLabel: "Stack usada",
    roleLabel: "Meu papel",
    featuresLabel: "Funcionalidades",
    statusLabel: "Estado",
    quickPostDescription:
      "API REST para criação e gestão de publicações, com estrutura organizada por rotas, controllers e serviços. Demonstra CRUD, validação de dados e preparação para deploy.",
    quickPostDetails: {
      role: "Planeamento da API, criação das rotas, validação e estrutura do backend.",
      status:
        "Projeto funcional, pronto para evoluir com autenticação, testes e documentação pública.",
      features: [
        "Endpoints REST organizados",
        "CRUD de publicações",
        "Validação de dados",
        "Estrutura preparada para deploy",
      ],
    },
    aderitoDescription:
      "Plataforma web para apoio ao ensino de inglês para falantes de português. O projeto trabalha apresentação de conteúdo, navegação simples e foco na experiência do aluno.",
    aderitoDetails: {
      role: "Construção da interface, organização das secções e adaptação da experiência para alunos.",
      status: "Interface publicada como projeto de apresentação.",
      features: [
        "Página responsiva",
        "Conteúdo organizado por secções",
        "Navegação simples",
        "Foco em apresentação educacional",
      ],
    },
    portfolioTitle: "Portfólio",
    portfolioDescription:
      "Portfólio profissional desenvolvido com Next.js e React para apresentar projetos, competências técnicas, formação e formas de contacto para oportunidades profissionais.",
    portfolioDetails: {
      role: "Desenvolvimento completo do frontend, organização dos dados e otimização da apresentação profissional.",
      status: "Projeto ativo e em melhoria contínua.",
      features: [
        "Interface bilingue",
        "Secções de projetos, competências e formação",
        "SEO básico configurado",
        "Componentes reutilizáveis",
      ],
    },
    shiftSyncTitle: "ShiftSync - Gestão de Turnos",
    shiftSyncDescription:
      "Aplicação web para gestão de turnos em restaurantes, focada na organização de escalas, equipas e operações diárias.",
    shiftSyncDetails: {
      role: "Criação da interface e organização das principais telas de gestão.",
      status: "Protótipo funcional publicado.",
      features: [
        "Gestão visual de turnos",
        "Organização de equipas",
        "Fluxo pensado para restaurantes",
        "Deploy na Vercel",
      ],
    },
    githubLabel: "Abrir repositório no GitHub",
    websiteLabel: "Abrir projeto online",
  },
  en: {
    title: "Projects",
    detailsLabel: "Details",
    hideDetailsLabel: "Hide",
    stackLabel: "Stack used",
    roleLabel: "My role",
    featuresLabel: "Features",
    statusLabel: "Status",
    quickPostDescription:
      "REST API for creating and managing posts, structured by routes, controllers and services. It demonstrates CRUD, data validation and deployment readiness.",
    quickPostDetails: {
      role: "API planning, route creation, validation and backend structure.",
      status:
        "Functional project, ready to evolve with authentication, tests and public documentation.",
      features: [
        "Organized REST endpoints",
        "Post CRUD",
        "Data validation",
        "Deployment-ready structure",
      ],
    },
    aderitoDescription:
      "Web platform designed to support English learning for Portuguese speakers. The project focuses on content presentation, simple navigation and a student-centered experience.",
    aderitoDetails: {
      role: "Interface development, section organization and experience adaptation for students.",
      status: "Published as a presentation project.",
      features: [
        "Responsive page",
        "Content organized by sections",
        "Simple navigation",
        "Educational presentation focus",
      ],
    },
    portfolioTitle: "Portfolio",
    portfolioDescription:
      "Professional portfolio built with Next.js and React to present projects, technical skills, education and contact channels for professional opportunities.",
    portfolioDetails: {
      role: "Full frontend development, content organization and professional presentation improvements.",
      status: "Active project under continuous improvement.",
      features: [
        "Bilingual interface",
        "Projects, skills and education sections",
        "Basic SEO configured",
        "Reusable components",
      ],
    },
    shiftSyncTitle: "ShiftSync - Shift Management",
    shiftSyncDescription:
      "Web application for restaurant shift management, focused on organizing schedules, teams and daily operations.",
    shiftSyncDetails: {
      role: "Interface creation and organization of the main management screens.",
      status: "Functional prototype published.",
      features: [
        "Visual shift management",
        "Team organization",
        "Workflow designed for restaurants",
        "Vercel deployment",
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
const DETAILS_MOTION = {
  closed: { height: 0, opacity: 0, y: -8 },
  open: { height: "auto", opacity: 1, y: 0 },
};

export default function Projects() {
  const { language } = useLanguageStore();
  const [openProjectId, setOpenProjectId] = useState(null);
  const t = TRANSLATIONS[language];
  const projects = getProjects(t);

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

                  <AnimatePresence initial={false}>
                    {openProjectId === project.id && (
                      <motion.div
                        layout
                        id={`project-details-${project.id}`}
                        className="project-card-details"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={DETAILS_MOTION}
                        transition={CARD_TRANSITION}
                      >
                        <ProjectDetail label={t.stackLabel}>
                          {project.stack}
                        </ProjectDetail>
                        <ProjectDetail label={t.roleLabel}>
                          {project.details.role}
                        </ProjectDetail>
                        <ProjectDetail label={t.statusLabel}>
                          {project.details.status}
                        </ProjectDetail>
                        <div className="project-card-detail">
                          <span className="project-card-detail-label">
                            {t.featuresLabel}
                          </span>
                          <ul className="project-card-detail-list">
                            {project.details.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <hr className="project-card-divider" />

                  <div className="project-card-footer">
                    <div className="project-card-actions">
                      <motion.button
                        type="button"
                        className="project-card-btn more-cert"
                        aria-expanded={openProjectId === project.id}
                        aria-controls={`project-details-${project.id}`}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => {
                          setOpenProjectId((current) =>
                            current === project.id ? null : project.id,
                          );
                        }}
                      >
                        {openProjectId === project.id
                          ? t.hideDetailsLabel
                          : t.detailsLabel}
                      </motion.button>
                      {project.links.map((link) => (
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
                          <Image
                            src={link.icon}
                            alt=""
                            width={18}
                            height={18}
                            loading="lazy"
                            style={{ objectFit: "contain" }}
                          />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </AnimatedContent>
            ))}
          </div>
        </div>
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
      id: "quick-post-api",
      title: "Quick-Post API",
      description: t.quickPostDescription,
      stack: "Node.js, Express, REST",
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
      id: "learn-english",
      title: "Learn English",
      description: t.aderitoDescription,
      stack: "React, Next.js, UI",
      details: t.aderitoDetails,
      image: "/aderito-projecto.jpg",
      imageAlt: "Aderito Project",
      links: [],
    },
    {
      id: "portfolio",
      title: t.portfolioTitle,
      description: t.portfolioDescription,
      stack: "Next.js, React",
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
      id: "shift-sync",
      title: t.shiftSyncTitle,
      description: t.shiftSyncDescription,
      stack: "Next.js, CSS",
      details: t.shiftSyncDetails,
      image: "/file.svg",
      imageAlt: t.shiftSyncTitle,
      links: [
        {
          href: "https://gestao-de-turnos.vercel.app",
          icon: "/globe.svg",
          label: t.websiteLabel,
        },
      ],
    },
  ];
}
