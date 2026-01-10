"use client";

import Image from "next/image";
import useLanguageStore from "@/store/useLanguageStore";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    badge: "Estudante de Desenvolvedor Back-End",
    intro:
      "Construindo APIs REST com Node.js, Express e SQL através de projetos práticos.",
    viewProjects: "Ver Projetos",
  },
  en: {
    badge: "Back-End Developer Student",
    intro:
      "Building REST APIs with Node.js, Express, and SQL through hands-on projects.",
    viewProjects: "View Projects",
  },
};

export default function Hero() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <div className="container">
      <div className="hero">
        <AnimatedText text="Iasaldo" className="hero-title" delay={0.2} />
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {t.badge}
        </motion.span>
        <motion.div
          className="intro-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="intro-text">{t.intro}</p>
          <a href="#projectos" className="minimal-btn">
            {t.viewProjects}
          </a>
        </motion.div>
      </div>
      <div className="hero-image">
        <motion.div
          className="avatar-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
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
            }}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
