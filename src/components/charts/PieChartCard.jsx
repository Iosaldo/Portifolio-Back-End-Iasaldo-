"use client";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Web development", value: 38.5 },
  { name: "JavaScript", value: 24.1 },
  { name: "Computer Science", value: 19.3 },
  { name: "SQL", value: 10.9 },
  { name: "Data engineering", value: 7.2 },
];

// Cores que combinam com a imagem de referência
const COLORS = ["#00d4d4", "#5eb3ff", "#7b68ee", "#9966ff", "#ff00ff"];

export default function PieChartCard() {
  const renderCustomLabel = (entry) => {
    return `${entry.name}\n${entry.value}%`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ResponsiveContainer width="100%" height={520}>
        <PieChart margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="48%"
            outerRadius={150}
            label={({ name, value }) => `${name}\n${value}%`}
            labelLine={false}
            labelPosition="outside"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="top"
            align="center"
            iconType="circle"
            wrapperStyle={{
              paddingBottom: "24px",
              color: "#fff",
              fontSize: "13px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
