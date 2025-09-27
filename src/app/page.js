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
    </main>
  );
}
