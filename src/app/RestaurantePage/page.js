"use client";
// src/app/RestaurantePage/page.js
import React, { useState } from "react";
import Image from "next/image";
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
        <div className="resto-nav-inner"></div>
      </nav>
      {/* Header */}
      <header className="resto-hero">
        <div className="container">
          <div className="hero-head">
            <h1 className="resto-title atop">Iyosaldo Batista</h1>
            {/* Avatar central abaixo do título (title sobreposto) */}
            <Image
              src="/avatar.jpg"
              alt="Avatar Iyosaldo"
              className="avatar resto-avatar"
              width={128}
              height={128}
              priority={true}
            />
          </div>
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
