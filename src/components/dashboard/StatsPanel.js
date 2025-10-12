"use client";

import { motion } from "framer-motion";
import LanguageIcons from "@/components/LanguageIcons";

export default function StatsPanel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="stats-panel"
    >
      <LanguageIcons />
    </motion.section>
  );
}
