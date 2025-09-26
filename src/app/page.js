import { Avatar } from "@mui/material";
import { Inter } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        <div className="flex items-center gap-8 mb-16 justify-center w-full">
          <div>
            <h1 className="text-4xl font-bold title-grow">
              Bem-vindo ao meu Portfólio
            </h1>
          </div>
          <Avatar
            alt="Iasaldo"
            src="/avatar.jpg"
            sx={{
              width: 170,
              height: 170,
              border: "3px solid var(--foreground)",
            }}
            className="avatar"
          />
        </div>

        {/* Card Stack */}
        <div className="card-stack">
          {/* Introdução */}
          <div className="stack-card">
            <h2 className="stack-title">Sobre Mim</h2>
            <div className="stack-content">
              <p>
                Desenvolvedor em formação, focado em criar soluções digitais
                funcionais, escaláveis e bem estruturadas. Tenho paixão por
                transformar ideias em aplicações que entregam valor real, com
                atenção à qualidade do código, organização e experiência do
                usuário. Estou comprometido com boas práticas de desenvolvimento
                e evolução contínua, sempre buscando experiência e técnica e
                profissional.
              </p>
            </div>
          </div>

          {/* Especialidades */}
          <div className="stack-card">
            <h2 className="stack-title">Especialidades</h2>
            <div className="stack-content">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="frontend">
                  <AccordionTrigger>Desenvolvimento Front-end</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>React.js para interfaces interativas</li>
                      <li>Next.js para aplicações web modernas e otimizadas</li>
                      <li>Styled Components e TailwindCSS</li>
                      <li>Implementação de animações e transições suaves</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="backend">
                  <AccordionTrigger>Desenvolvimento Back-end</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Node.js e Express para APIs RESTful</li>
                      <li>Async JavaScript and HTTP Request</li>
                      <li>Autenticação e Autorização</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="architecture">
                  <AccordionTrigger>Advanced Back-End</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Controle de Versionamento com Git</li>
                      <li>SQL, PostgreSQL, Database to a Server</li>
                      <li>Deploy, JavaScript Testing</li>
                      <li>API Development with Swagger and OpenAPI</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Desenvolvimento Profissional */}
          <div className="stack-card">
            <h2 className="stack-title">Desenvolvimento Profissional</h2>
            <div className="stack-content">
              <p>
                Busco constantemente aprender novas tecnologias e aplicar as
                melhores práticas de desenvolvimento em meus projetos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
