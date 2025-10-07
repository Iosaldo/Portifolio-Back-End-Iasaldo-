"use client";
// src/app/RestaurantePage/page.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import { useRouter } from "next/navigation";
import "./Restaurante.css";

function AccordionItem({ id, title, meta, bullets }) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-panel`;
  const headingId = `${id}-heading`;

  return (
    <div className="accordion-item" role="listitem">
      <button
        id={headingId}
        aria-controls={panelId}
        aria-expanded={open}
        className="accordion-header"
        onClick={() => setOpen((v) => !v)}
      >
        <div>
          <div className="job-title">{title}</div>
          <div className="job-meta">{meta}</div>
        </div>
        <div className="accordion-chevron" aria-hidden>
          {open ? "−" : "+"}
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className={`accordion-panel ${open ? "open" : "closed"}`}
        style={{
          maxHeight: open ? "400px" : "0px",
          transition: "max-height 300ms ease",
          overflow: "hidden",
        }}
      >
        <ul className="accordion-list">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function RestaurantePage() {
  const router = useRouter();

  const sectionVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.44, ease: "easeOut" },
    }),
  };
  return (
    <div className="resto-root">
      {/* Nav superior  */}
      <nav className="resto-nav" aria-label="Navegação Restaurante">
        <div className="resto-nav-inner">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              type="button"
              className="resto-portfolio-button"
              onClick={() => router.push("/")}
              aria-label="Voltar à Página Inicial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                className="resto-portfolio-icon"
              >
                <circle
                  strokeWidth="3"
                  stroke="currentColor"
                  r="35.5"
                  cy="37"
                  cx="37"
                ></circle>
                <path
                  fill="currentColor"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </button>
          </motion.div>
        </div>
      </nav>
      {/* Header */}
      <header className="resto-hero">
        <div className="container">
          <h1 className="resto-title">Iyosaldo Batista</h1>
          <p className="resto-subtitle">
            Profissional de Restauração & Hospitalidade
          </p>
          <p className="resto-meta">
            <span>936291684</span>
            <span>iyosaldonbk@gmail.com</span>
          </p>
          <a
            href="https://www.linkedin.com/in/iasaldo-frota-8b9128b1/"
            target="_blank"
            rel="noreferrer"
            className="resto-link"
          >
            <FiLinkedin aria-hidden="true" className="resto-link-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
        {/* resto-hero-actions removido: botão Voltar agora na nav superior */}
      </header>

      {/* Resumo */}
      <motion.section
        className="section Resumo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
        variants={sectionVariant}
      >
        <h2 className="section-title">Resumo Profissional</h2>
        <div className="card">
          <p>
            Profissional de vendas e restauração com experiência em atendimento
            ao cliente, organização de espaço e gestão de sala. Disponível para
            novos desafios em hospitalidade e restauração.
          </p>
        </div>
      </motion.section>

      {/* Experiência Profissional */}
      <motion.section
        className="section Experiencia"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        custom={1}
        variants={sectionVariant}
      >
        <h2 className="section-title">Experiência Profissional</h2>
        <div className="accordion" role="list">
          {/* transformamos as experiências num array e renderizamos um accordion */}
          {[
            {
              title: "Room Service / Waiter - PHC Hotels",
              meta: "Mar 2022 - Atual | Portugal",
              bullets: [
                "-Serviços de Quarto & Mise en Place",
                "-Atendimento a clientes (turistas)",
                "-Bagageiro",
              ],
            },
            {
              title: "Chefe de Sala - VaiVem ",
              meta: "Set 2020 - Set 2021 | Portugal",
              bullets: [
                "Atendimento a clientes internacionais",
                "Gestão de reservas e organização da sala",
                "Restaurante Taberna (Guia Michelin)",
              ],
            },
            {
              title: "Mesa / Pico Mocambo",
              meta: "Set 2022 - Out 2022 | São Tomé",
              bullets: ["Multitasking em restaurante referência turística"],
            },
            {
              title: "Talho - El Corte Inglés",
              meta: "Dez 2022 - Fev 2023 | Portugal",
              bullets: [
                "Organização e atendimento no balcão de talho",
                "Gestão de inventário",
              ],
            },
          ].map((exp, idx) => (
            <AccordionItem
              key={idx}
              id={`exp-${idx}`}
              title={exp.title}
              meta={exp.meta}
              bullets={exp.bullets}
            />
          ))}
        </div>
      </motion.section>

      {/* Educação */}
      <motion.section
        className="section Educacao"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        custom={2}
        variants={sectionVariant}
      >
        <h2 className="section-title">Educação</h2>
        <div className="card">
          <ul>
            <li>Liceu Nacional - Ciências e Tecnologia (2015-2019)</li>
            <li>IFAC - Informática Profissional (2016-2019)</li>
          </ul>
        </div>
      </motion.section>

      {/* Habilidades */}
      <motion.section
        className="section Habilidades"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        custom={3}
        variants={sectionVariant}
      >
        <h2 className="section-title">Habilidades</h2>
        <div className="chip-grid">
          {[
            "Restauração",
            "Atendimento ao Cliente",
            "Fotografia",
            "Bartender",
            "Reparação Eletrónica",
          ].map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Idiomas */}
      <motion.section
        className="section Idiomas"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        custom={4}
        variants={sectionVariant}
      >
        <h2 className="section-title">Idiomas</h2>
        <div className="card">
          <ul className="lang-list">
            <li>Português (Nativo)</li>
            <li>Inglês (Bom)</li>
          </ul>
        </div>
      </motion.section>

      {/* botão Voltar movido para o header */}
    </div>
  );
}
