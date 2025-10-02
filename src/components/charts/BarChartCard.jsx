"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { linguagem: "Software Engineering Foundations", pratica_pct: 72, logica_pct: 65 },
  { linguagem: "Back-End Development", pratica_pct: 92, logica_pct: 79 },
  { linguagem: "Advanced Back-End Development", pratica_pct: 0o0, logica_pct: 0o0 },
];

export default function BarChartCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Distribuição de Prática e Lógica (%)</CardTitle>
        </CardHeader>
        <CardContent className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="linguagem" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pratica_pct" fill="#3b82f6" name="Prática (%)" />
              <Bar dataKey="logica_pct" fill="#f97316" name="Lógica (%)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
