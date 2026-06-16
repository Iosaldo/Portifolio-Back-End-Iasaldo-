import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://portifolio-iyosaldo.vercel.app"),
  title: "Iasaldo Batista | Junior Back-End Developer",
  description:
    "Portfólio de Iasaldo Batista, desenvolvedor Back-End júnior que constrói APIs REST com Node.js, Express, SQL/PostgreSQL, autenticação, validação e deploy.",
  keywords: [
    "Iasaldo Batista",
    "Junior Back-End Developer",
    "Desenvolvedor Back-End",
    "Node.js",
    "Express",
    "PostgreSQL",
    "SQL",
    "REST APIs",
    "JWT",
    "RBAC",
    "API documentation",
    "Portfolio",
  ],
  authors: [{ name: "Iasaldo Batista" }],
  openGraph: {
    title: "Iasaldo Batista | Junior Back-End Developer",
    description:
      "Projetos back-end com APIs REST, autenticação, bases de dados, deploy e documentação técnica.",
    type: "website",
    images: [{ url: "/avatar.jpg", width: 420, height: 560 }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <DashboardHeader />
        <main className="site-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
