"use client";

import BarChartCard from "@/components/charts/BarChartCard";
import PieChartCard from "@/components/charts/PieChartCard";

export default function ChartsGrid() {
  return (
    <section>
      <div className="charts-grid">
        <BarChartCard />
        <PieChartCard />
      </div>
    </section>
  );
}
