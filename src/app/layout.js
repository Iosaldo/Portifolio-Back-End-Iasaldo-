// src/app/layout.js
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Meu Projeto Next.js",
  description: "Site de exemplo com layout global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {/* Header global */}
        <header style={{ background: "#222", color: "#fff", padding: "1rem" }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/contact">Contato</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>

        {/* Conteúdo das páginas */}
        <main style={{ padding: "1rem" }}>{children}</main>

        {/* Footer global */}
        <footer style={{ background: "#eee", padding: "1rem", marginTop: "2rem" }}>
          <p>© 2025 - Meu Projeto</p>
        </footer>
      </body>
    </html>
  );
}
