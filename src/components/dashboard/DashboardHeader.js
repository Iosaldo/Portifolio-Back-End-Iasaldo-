"use client";

export default function DashboardHeader({ title }) {
  if (!title) return null;
  return (
    <header className="dashboard-header">
      <h2 className="dashboard-title">{title}</h2>
    </header>
  );
}
