"use client";
import "./home.css";
import { Avatar } from "@mui/material";
import { Inter } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SplitText from "@/components/SplitText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function scrollDown() {
    if (typeof window !== "undefined") {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  }
  return (
    <main className="site-main">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="text-center">
            <SplitText>Bem-vindo! Que bom ter você aqui!</SplitText>
          </div>
          <div data-aos="fade-up">
            <Avatar
              alt="Iasaldo"
              src="/avatar.jpg"
              sx={{
                width: 170,
                height: 170,
                border: "3px solid var(--foreground)",
              }}
              className="avatarhome"
            />
          </div>
        </div>
      </div>
      <div className="scroll-button"></div>
    </main>
  );
}
