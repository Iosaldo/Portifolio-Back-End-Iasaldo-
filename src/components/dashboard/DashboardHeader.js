"use client";

export default function DashboardHeader({
  title = "Estatísticas de Linguagens",
}) {
  return (
    <header className="dashboard-header">
      <h1 className="dashboard-title">{title}</h1>
    </header>
  );
}
