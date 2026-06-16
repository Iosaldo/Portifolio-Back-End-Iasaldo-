"use client";

import Image from "next/image";
import useLanguageStore from "@/store/useLanguageStore";
import AnimatedText from "@/components/AnimatedText";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    badge: "Desenvolvedor Back-End Júnior",
    intro:
      "Transformo regras de negócio em APIs que fazem trabalho de verdade: turnos, feedback e publicações. Recebo dados, valido, guardo e devolvo respostas claras com Node.js, Express e PostgreSQL.",
    viewProjects: "Ver projetos",
  },
  en: {
    badge: "Junior Back-End Developer",
    intro:
      "I turn business rules into APIs that do real work: shifts, feedback and posts. I receive data, validate it, store it and return clear responses with Node.js, Express and PostgreSQL.",
    viewProjects: "View projects",
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
          <Button
            type="button"
            onClick={() => {
              const section = document.getElementById("projectos");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.viewProjects}
          </Button>
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
            alt="Iasaldo Batista"
            width={420}
            height={560}
            sizes="(max-width: 700px) 90vw, (max-width: 900px) 360px, 420px"
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
