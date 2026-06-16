"use client";

import CertificatesGrid from "@/components/dashboard/CertificatesGrid";
import CertificateIcon from "@/components/icons/CertificateIcon";
import useLanguageStore from "@/store/useLanguageStore";
import Link from "next/link";
import "./certificados.css";

const TRANSLATIONS = {
  pt: {
    title: "Certificações",
    subtitle:
      "Certificados Codecademy sincronizados com os PDFs do portfólio.",
    back: "← Voltar ao início",
  },
  en: {
    title: "Certificates",
    subtitle: "Codecademy certificates synced with the portfolio PDF files.",
    back: "← Back to home",
  },
};

export default function CertificadosPage() {
  const { language } = useLanguageStore();
  const t = TRANSLATIONS[language];

  return (
    <div className="certificados-page">
      <header className="certificados-header">
        <Link href="/" className="back-button">
          {t.back}
        </Link>
        <h1 className="certificados-title">
          <CertificateIcon size={52} className="certificados-title-icon" />
          {t.title}
        </h1>
        <p className="certificados-subtitle">{t.subtitle}</p>
      </header>

      <CertificatesGrid animated={false} />
    </div>
  );
}
