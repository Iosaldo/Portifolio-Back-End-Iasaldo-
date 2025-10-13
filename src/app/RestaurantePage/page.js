"use client";
// src/app/RestaurantePage/page.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import "./Restaurante.css";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import HeaderCard from "@/components/HeaderCard";

// Using Park UI / Radix-based Accordion from components/ui/accordion

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
        <button onClick={() => router.back()} className="back-button" aria-label="Voltar">
          <FiArrowLeft size={24} />
        </button>
      </nav>
      <header className="resto-header">
        <HeaderCard/>
      </header>
      {/* Main content */}
      <main role="main">
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
              Profissional de vendas e restauração com experiência em
              atendimento ao cliente, organização de espaço e gestão de sala.
              Disponível para novos desafios em hospitalidade e restauração.
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
          <div role="list">
            <Accordion type="single" collapsible className="w-full accordion">
              {[
                {
                  title: "Room Service / Waiter - PHC Hotels",
                  meta: "Mar 2022 - Atual | Portugal",
                  bullets: [
                    "Serviços de Quarto & Mise en Place",
                    "Atendimento a clientes (turistas)",
                    "Bagageiro",
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
                  value={`exp-${idx}`}
                  className="accordion-item"
                >
                  <AccordionTrigger className="accordion-header">
                    <div>
                      <div className="job-title">{exp.title}</div>
                      <div className="job-meta">{exp.meta}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="accordion-list">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
      </main>
    </div>
  );
}
