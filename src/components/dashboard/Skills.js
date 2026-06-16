"use client";

import useLanguageStore from "@/store/useLanguageStore";
import AnimatedText from "@/components/AnimatedText";
import AnimatedContent from "@/components/AnimatedContent";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Competências",
    categories: [
      {
        title: "Back-End",
        items: ["Node.js", "Express.js", "APIs REST", "CRUD"],
      },
      {
        title: "Arquitetura e segurança",
        items: ["JWT", "Validação de dados", "Controllers/Services", "RBAC"],
      },
      {
        title: "Bases de dados",
        items: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        title: "Deploy e documentação",
        items: ["Render", "Vercel", "README técnico", "Postman"],
      },
      {
        title: "Ferramentas",
        items: ["Git", "GitHub", "VS Code", "CI/CD básico"],
      },
    ],
  },
  en: {
    title: "Technical Skills",
    categories: [
      {
        title: "Back-End",
        items: ["Node.js", "Express.js", "REST APIs", "CRUD"],
      },
      {
        title: "Architecture and security",
        items: ["JWT", "Data validation", "Controllers/Services", "RBAC"],
      },
      {
        title: "Databases",
        items: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        title: "Deploy and documentation",
        items: ["Render", "Vercel", "Technical README", "Postman"],
      },
      {
        title: "Tools",
        items: ["Git", "GitHub", "VS Code", "Basic CI/CD"],
      },
    ],
  },
};

export default function Skills() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <section id="learning-focus" className="section">
      <div className="learning-focus-page">
        <AnimatedContent
          direction="horizontal"
          reverse={true}
          distance={80}
          duration={1}
        >
          <div className="learning-focus-left">
            <AnimatedText text={t.title} as="h3" />
          </div>
        </AnimatedContent>
        <div className="learning-focus-right">
          <div className="skills-text-content">
            {t.categories.map((category, index) => (
              <AnimatedContent
                key={category.title}
                delay={0.3 + index * 0.3}
                distance={100}
                duration={0.6}
                direction="horizontal"
              >
                <div className="skill-category-text">
                  <h4>{category.title}</h4>
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
