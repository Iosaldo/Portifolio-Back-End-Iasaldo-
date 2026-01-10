"use client";

import { useEffect } from "react";
import { useProgressStore } from "@/store/useProgressStore";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import "./globals.css";

export default function RootLayout({ children }) {
  const { progress } = useProgressStore();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (progress < 100) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      body.style.height = "auto";
    }
  }, [progress]);

  return (
    <html lang="en">
      <body>
        <DashboardHeader />
        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}
