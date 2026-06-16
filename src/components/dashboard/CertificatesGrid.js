"use client";

import AnimatedContent from "@/components/AnimatedContent";
import {
  CERTIFICATE_TRANSLATIONS,
  getCertificates,
} from "@/data/certificates";
import useLanguageStore from "@/store/useLanguageStore";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const IMAGE_SIZES = "(max-width: 480px) 100vw, (max-width: 900px) 220px, 100px";
const CARD_MOTION = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.03 },
  tap: { scale: 0.98 },
};
const CARD_TRANSITION = { type: "spring", stiffness: 260, damping: 24 };

export default function CertificatesGrid({ animated = true, limit }) {
  const { language } = useLanguageStore();
  const [openCertificateId, setOpenCertificateId] = useState(null);
  const t = CERTIFICATE_TRANSLATIONS[language];
  const allCertificates = getCertificates(t);
  const certificates =
    typeof limit === "number"
      ? allCertificates.slice(0, limit)
      : allCertificates;
  const activeCertificate = allCertificates.find(
    (certificate) => certificate.id === openCertificateId,
  );

  return (
    <>
      <div className="projectos-grid certificados-cards-grid">
        {certificates.map((certificate, index) => {
          const card = (
            <motion.article
              key={certificate.id}
              className="project-card-modern"
              layout
              variants={CARD_MOTION}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              transition={CARD_TRANSITION}
              onClick={() => setOpenCertificateId(certificate.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-card-img certificate-card-img">
                <Image
                  src={certificate.image}
                  alt={certificate.imageAlt}
                  width={400}
                  height={300}
                  sizes={IMAGE_SIZES}
                  className="certificate-card-thumb"
                />
              </div>

              <div className="project-card-title">{certificate.title}</div>
              <div className="project-card-subtitle">
                {certificate.institution} · {certificate.date}
              </div>

              <hr className="project-card-divider" />
            </motion.article>
          );

          if (!animated) {
            return <div key={certificate.id}>{card}</div>;
          }

          return (
            <AnimatedContent
              key={certificate.id}
              delay={0.2 + index * 0.15}
              distance={50}
              duration={0.5}
              direction="horizontal"
            >
              {card}
            </AnimatedContent>
          );
        })}
      </div>

      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            key={activeCertificate.id}
            className="project-dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenCertificateId(null)}
          >
            <motion.div
              className="project-dialog"
              initial={{ y: 24, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`certificate-dialog-title-${activeCertificate.id}`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="project-dialog-header">
                <div>
                  <h3 id={`certificate-dialog-title-${activeCertificate.id}`}>
                    {activeCertificate.title}
                  </h3>
                  <p>{activeCertificate.description}</p>
                </div>
                <button
                  type="button"
                  className="project-dialog-close"
                  onClick={() => setOpenCertificateId(null)}
                  aria-label="Close certificate details"
                >
                  ×
                </button>
              </div>

              <div className="certificate-dialog-preview">
                <Image
                  src={activeCertificate.image}
                  alt={activeCertificate.imageAlt}
                  width={640}
                  height={420}
                  sizes="(max-width: 700px) 100vw, 640px"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    objectFit: "contain",
                    background: "#111",
                  }}
                />
              </div>

              <div className="project-dialog-body">
                <CertificateDetail label={t.institutionLabel}>
                  {activeCertificate.details.institution}
                </CertificateDetail>
                <CertificateDetail label={t.dateLabel}>
                  {activeCertificate.details.date}
                </CertificateDetail>
                <CertificateDetail label={t.statusLabel}>
                  {activeCertificate.details.status}
                </CertificateDetail>
                <div className="project-card-detail">
                  <span className="project-card-detail-label">
                    {t.topicsLabel}
                  </span>
                  <ul className="project-card-detail-list">
                    {activeCertificate.details.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-dialog-actions">
                {activeCertificate.links.map((link) => (
                  <motion.a
                    key={link.href}
                    className="project-card-btn"
                    aria-label={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CertificateDetail({ label, children }) {
  return (
    <div className="project-card-detail">
      <span className="project-card-detail-label">{label}</span>
      <p>{children}</p>
    </div>
  );
}
