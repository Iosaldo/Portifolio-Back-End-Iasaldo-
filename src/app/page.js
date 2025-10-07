import { Avatar } from "@mui/material";
import { Inter } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion"; // Importa motion

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        <div className="flex items-center gap-8 mb-16 justify-center w-full">
          <div>
            <SplitText>Bem-vindo! Que bom ter você aqui!</SplitText>
          </div>
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
      {/* Botao de download */}
      <button className="Btn">
        <svg
          className="svgIcon"
          viewBox="0 0 384 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
        <span className="icon2"></span>
        <span className="tooltip">Download</span>
      </button>
    </main>
  );
}
