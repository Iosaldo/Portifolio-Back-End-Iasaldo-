"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DashboardHeader />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
