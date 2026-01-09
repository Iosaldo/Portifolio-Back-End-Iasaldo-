"use client";

import { useProgressStore } from "@/store/useProgressStore";
import "./DashboardHeader.css";

export default function DashboardHeader() {
  const { progress } = useProgressStore();
  const locked = progress < 100;

  return (
    <header className="dashboard-header">
      <nav className={locked ? "locked" : ""}>
        <button onClick={() => scrollToSection("top")}>Home</button>
        <button onClick={() => scrollToSection("projectos")}>Project</button>
        <button onClick={() => scrollToSection("learning-focus")}>
          Skills
        </button>
        <button onClick={() => scrollToSection("education")}>Education</button>
        <button onClick={() => scrollToSection("about")}>About Me</button>
      </nav>
    </header>
  );
}

function scrollToSection(id) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
