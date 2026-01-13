"use client";

import useLanguageStore from "@/store/useLanguageStore";
import AnimatedText from "@/components/AnimatedText";
import AnimatedContent from "@/components/AnimatedContent";
import "../../app/home.css";

const TRANSLATIONS = {
  pt: {
    title: "Habilidades",
  },
  en: {
    title: "Skills",
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
            <AnimatedText text={t.title} className="" as="h3" />
          </div>
        </AnimatedContent>
        <div className="learning-focus-right">
          <div className="skills-text-content">
            <AnimatedContent
              delay={0.3}
              distance={100}
              duration={0.6}
              direction="horizontal"
            >
              <div className="skill-category-text">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            </AnimatedContent>
            <AnimatedContent
              delay={0.6}
              distance={100}
              duration={0.6}
              direction="horizontal"
            >
              <div className="skill-category-text">
                <h4>Database</h4>
                <ul>
                  <li>SQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </AnimatedContent>
            <AnimatedContent
              delay={0.9}
              distance={100}
              duration={0.6}
              direction="horizontal"
            >
              <div className="skill-category-text">
                <h4>Tools</h4>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
