// src/app/RestaurantePage/page.js
import React from "react";

export default function RestaurantePage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-red-700 text-white py-6 shadow-md">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Iyosaldo Batista</h1>
          <p className="text-lg">Profissional de Restauração & Hospitalidade</p>
          <p className="mt-2">
            📍 Portugal | 📞 936291684 | ✉️ iyosaldonbk@gmail.com
          </p>
          <a
            href="https://www.linkedin.com/in/iasaldo-frota-8b9128b1/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 underline"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* Resumo */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-700 w-fit">
          Resumo Profissional
        </h2>
        <p>
          Profissional de vendas e restauração com experiência em atendimento ao
          cliente, organização de espaço e gestão de sala. Disponível para novos
          desafios em hospitalidade e restauração.
        </p>
      </section>

      {/* Experiência Profissional */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-700 w-fit">
          Experiência Profissional
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">Room Service / Waiter - PHC Hotels</h3>
            <p className="text-sm text-gray-600">Mar 2022 - Atual | Portugal</p>
            <ul className="list-disc ml-6">
              <li>Serviços de Quarto & Mise en Place</li>
              <li>Atendimento a clientes (turistas)</li>
              <li>Bagageiro</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Chefe de Sala - Grupo José Avillez</h3>
            <p className="text-sm text-gray-600">
              Set 2020 - Set 2021 | Portugal
            </p>
            <ul className="list-disc ml-6">
              <li>Atendimento a clientes internacionais</li>
              <li>Gestão de reservas e organização da sala</li>
              <li>Restaurante Taberna (Guia Michelin)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Mesa / Pico Mocambo</h3>
            <p className="text-sm text-gray-600">
              Set 2022 - Out 2022 | São Tomé
            </p>
            <ul className="list-disc ml-6">
              <li>Multitasking em restaurante referência turística</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Talho - Modelo</h3>
            <p className="text-sm text-gray-600">
              Dez 2022 - Fev 2023 | Portugal
            </p>
            <ul className="list-disc ml-6">
              <li>Organização e atendimento no balcão de talho</li>
              <li>Gestão de inventário</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Educação */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-700 w-fit">
          Educação
        </h2>
        <ul className="list-disc ml-6">
          <li>Liceu Nacional - Ciências e Tecnologia (2015-2019)</li>
          <li>IFAC - Informática Profissional (2016-2019)</li>
        </ul>
      </section>

      {/* Habilidades */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-700 w-fit">
          Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className="bg-red-100 px-3 py-2 rounded">Restauração</span>
          <span className="bg-red-100 px-3 py-2 rounded">
            Atendimento ao Cliente
          </span>
          <span className="bg-red-100 px-3 py-2 rounded">Fotografia</span>
          <span className="bg-red-100 px-3 py-2 rounded">Bartender</span>
          <span className="bg-red-100 px-3 py-2 rounded">Produção Musical</span>
          <span className="bg-red-100 px-3 py-2 rounded">
            Reparação Eletrónica
          </span>
        </div>
      </section>

      {/* Idiomas */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-700 w-fit">
          Idiomas
        </h2>
        <ul className="Lingua">
          <li>Português (Nativo)</li>
          <li>Inglês (Bom)</li>
        </ul>
      </section>

    </div>
  );
}

