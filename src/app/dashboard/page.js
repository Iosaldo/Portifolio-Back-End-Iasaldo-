"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsPanel from "@/components/dashboard/StatsPanel";
import ChartsGrid from "@/components/dashboard/ChartsGrid";
import "./dashboard.css";

export default function DashboardPage() {
  return (
    <main className="dashboard-main">
      <div className="projectos">
        <DashboardHeader />
        <StatsPanel />
        <ChartsGrid />
      </div>
    </main>
  );
}
