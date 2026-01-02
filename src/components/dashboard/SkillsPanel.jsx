"use client";

import React from "react";
import "./SkillsPanel.css";

export default function SkillsPanel() {
const skills = [
    { title: "Web development", xp: "4049 XP", icon: "</>" },
    { title: "JavaScript", xp: "2572 XP", icon: "JS" },
    { title: "Computer science", xp: "2077 XP", icon: "CPU" },
    { title: "SQL", xp: "1259 XP", icon: "SQL" },
    { title: "Data engineering", xp: "1100 XP", icon: "DE" },
    { title: "HTML & CSS", xp: "899 XP", icon: "<>" },
];

return (
    <section className="skills-card">
<div className="skills-header">
        <h2 className="skills-title">
Skills tracking 
        </h2>
</div>

<div className="skills-body">
        <div className="skills-chart" aria-hidden>
          <div className="chart-bars">
            {skills.map((s, i) => {
              const widths = [82, 50, 34, 20, 16, 14, 12, 10];
              return (
                <div className="bar-row" key={i}>
                  <div className="bar-icon">{s.icon}</div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: `${widths[i]}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills-list">
          {skills.map((s, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-left">
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-title">{s.title}</div>
              </div>
              <div className="skill-xp">{s.xp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
);
}
