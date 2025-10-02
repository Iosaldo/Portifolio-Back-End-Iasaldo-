"use client";

import { motion } from "framer-motion";
import BarChartCard from "@/components/charts/BarChartCard";
import PieChartCard from "@/components/charts/PieChartCard";
import LanguageIcons from "@/components/LanguageIcons";

export default function DashboardPage() {
  return (
    <div className="p-8 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-foreground"
      >
      Estatísticas de Linguagens
      </motion.h1>

       {/* Ícones com percentagens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <LanguageIcons />
      </motion.div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChartCard />
        <PieChartCard />
      </div>


    </div>
  );
}
