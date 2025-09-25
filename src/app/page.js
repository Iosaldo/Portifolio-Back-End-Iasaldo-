import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Bem-vindo ao meu Portfólio</h1>
        <p className="text-xl mb-4">
          Este é um espaço onde compartilho meus projetos e experiências.
        </p>
      </div>
    </main>
  );
}
