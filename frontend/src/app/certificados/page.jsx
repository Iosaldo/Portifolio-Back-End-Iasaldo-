"use client";

import { useState } from "react";
import useLanguageStore from "@/store/useLanguageStore";
import AnimatedContent from "@/components/AnimatedContent";
import AnimatedText from "@/components/AnimatedText";
import "./certificados.css";

// Função para extrair ID do Google Drive e gerar URL de imagem
const extractGoogleDriveImageUrl = (link) => {
  if (!link || link === "#") return null;

  // Padrão do Google Drive: /d/FILE_ID/
  const match = link.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }

  // Se for um link direto de imagem, retorna como está
  if (link.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    return link;
  }

  return null;
};

const TRANSLATIONS = {
  pt: {
    title: "Certificados",
    subtitle: "Minha jornada de aprendizado contínuo",
    backButton: "← Voltar",
    institution: "Instituição",
    date: "Data",
    viewCertificate: "Ver certificado",
    listView: "Lista",
    thumbnailView: "Miniaturas",
  },
  en: {
    title: "Certificates",
    subtitle: "My continuous learning journey",
    backButton: "← Back",
    institution: "Institution",
    date: "Date",
    viewCertificate: "View certificate",
    listView: "List",
    thumbnailView: "Thumbnails",
  },
};

const CERTIFICATES = {
  pt: [
    {
      id: 1,
      title: "JavaScript Intermediário",
      institution: "Codecademy",
      date: "2024",
      description:
        "Fundamentos avançados de JavaScript incluindo ES6+, async/await e manipulação do DOM.",
      image: "/images/certificates/JavaScript_Intermediate.jpg",
      link: "https://drive.google.com/file/d/1plJjlFSxTmbZ4mPWIc2lbsEKy9H_hebv/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Backend com Node.js",
      institution: "Codecademy",
      date: "2024",
      description:
        "Desenvolvimento de APIs RESTful, autenticação e integração com bancos de dados.",
      image:
        "https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbc-9da8-1e4614407d94/Codecademy_Project_Badge__1_.png",
      link: "https://drive.google.com/file/d/1plJjlFSxTmbZ4mPWIc2lbsEKy9H_hebv/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Fundamentos de Banco de Dados",
      institution: "Codecademy",
      date: "2024",
      description: "SQL, modelagem de dados e otimização de queries.",
      image:
        "https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbc-9da8-1e4614407d94/Codecademy_Project_Badge__1_.png",
      link: "https://drive.google.com/file/d/1plJjlFSxTmbZ4mPWIc2lbsEKy9H_hebv/view?usp=drive_link",
    },
    {
      id: 4,
      title: "REST APIs",
      institution: "Codecademy",
      date: "2024",
      description:
        "Criação e consumo de APIs RESTful seguindo melhores práticas.",
      image:
        "https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbc-9da8-1e4614407d94/Codecademy_Project_Badge__1_.png",
      link: "https://drive.google.com/file/d/1plJjlFSxTmbZ4mPWIc2lbsEKy9H_hebv/view?usp=drive_link",
    },
    // Adicione mais certificados aqui
  ],
  en: [
    {
      id: 1,
      title: "Intermediate JavaScript",
      institution: "Codecademy",
      date: "2024",
      description:
        "Advanced JavaScript fundamentals including ES6+, async/await and DOM manipulation.",
      image:
        "https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbc-9da8-1e4614407d94/Codecademy_Project_Badge__1_.png",
      link: "#",
    },
    {
      id: 2,
      title: "Backend with Node.js",
      institution: "Codecademy",
      date: "2024",
      description:
        "RESTful API development, authentication and database integration.",
      image:
        "https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbc-9da8-1e4614407d94/Codecademy_Project_Badge__1_.png",
      link: "https://drive.google.com/file/d/1plJjlFSxTmbZ4mPWIc2lbsEKy9H_hebv/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Database Fundamentals",
      institution: "Codecademy",
      date: "2024",
      description: "SQL, data modeling and query optimization.",
      image:
        "https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbc-9da8-1e4614407d94/Codecademy_Project_Badge__1_.png",
      link: "https://drive.google.com/file/d/1plJjlFSxTmbZ4mPWIc2lbsEKy9H_hebv/view?usp=drive_link",
    },
    {
      id: 4,
      title: "REST APIs",
      institution: "Codecademy",
      date: "2024",
      description:
        "Creating and consuming RESTful APIs following best practices.",
      image:
        "https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbc-9da8-1e4614407d94/Codecademy_Project_Badge__1_.png",
      link: "https://drive.google.com/file/d/1plJjlFSxTmbZ4mPWIc2lbsEKy9H_hebv/view?usp=drive_link",
    },
    // Add more certificates here
  ],
};

export default function CertificadosPage() {
  const { language } = useLanguageStore();
  const [viewMode, setViewMode] = useState("list"); // "list" ou "thumbnails"
  const t = TRANSLATIONS[language];
  const certificates = CERTIFICATES[language];

  return (
    <main className="certificados-page">
      <AnimatedContent direction="vertical" distance={60} duration={0.8}>
        <div className="certificados-header">
          <button onClick={() => window.history.back()} className="back-button">
            {t.backButton}
          </button>
          <AnimatedText text={t.title} className="certificados-title" as="h1" />
          <p className="certificados-subtitle">{t.subtitle}</p>
        </div>
      </AnimatedContent>

      {/* View Mode Toggle */}
      <div className="view-mode-toggle">
        <button
          className={`view-btn ${viewMode === "list" ? "active" : ""}`}
          onClick={() => setViewMode("list")}
          title={t.listView}
        >
          ≡ {t.listView}
        </button>
        <button
          className={`view-btn ${viewMode === "thumbnails" ? "active" : ""}`}
          onClick={() => setViewMode("thumbnails")}
          title={t.thumbnailView}
        >
          ⊞ {t.thumbnailView}
        </button>
      </div>

      <div className={`certificados-grid ${viewMode}`}>
        {certificates.map((cert, index) => {
          const imageUrl = cert.image || extractGoogleDriveImageUrl(cert.link);

          return (
            <AnimatedContent
              key={cert.id}
              delay={0.2 + index * 0.1}
              distance={80}
              duration={0.6}
              direction="horizontal"
            >
              <div className="certificate-card-full">
                {imageUrl && (
                  <div className="cert-image-container">
                    <img
                      src={imageUrl}
                      alt={cert.title}
                      className="cert-image"
                    />
                  </div>
                )}
                <div className="cert-header">
                  <h3 className="cert-title">{cert.title}</h3>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-institution">
                  <strong>{t.institution}:</strong> {cert.institution}
                </p>
                {cert.description && (
                  <p className="cert-description">{cert.description}</p>
                )}
                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link-full"
                  >
                    {t.viewCertificate} →
                  </a>
                )}
              </div>
            </AnimatedContent>
          );
        })}
      </div>
    </main>
  );
}
