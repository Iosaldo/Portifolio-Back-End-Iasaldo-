import "dotenv/config";
import { connectDB, closeDB } from "./src/config/database.js";

const sampleFeedbacks = [
  {
    name: "Maria Silva",
    message:
      "Portfólio incrível! Adorei o design moderno e a navegação intuitiva. Parabéns pelo trabalho!",
    rating: 5,
    createdAt: new Date("2026-01-10T14:30:00"),
  },
  {
    name: "João Santos",
    message:
      "Muito profissional! Os projetos demonstram grande conhecimento técnico. Impressionante!",
    rating: 5,
    createdAt: new Date("2026-01-09T10:15:00"),
  },
  {
    name: "Ana Costa",
    message:
      "Excelente apresentação das skills e projetos. Definitivamente voltarei para conferir novidades!",
    rating: 4,
    createdAt: new Date("2026-01-08T16:45:00"),
  },
];

async function seedDatabase() {
  try {
    const db = await connectDB();
    const collection = db.collection("feedbacks");

    // Limpar coleção existente
    await collection.deleteMany({});
    console.log("🗑️  Coleção limpa");

    // Inserir feedbacks de exemplo
    const result = await collection.insertMany(sampleFeedbacks);
    console.log(`✅ ${result.insertedCount} feedbacks inseridos`);

    // Mostrar feedbacks
    const allFeedbacks = await collection.find({}).toArray();
    console.log("\n📋 Feedbacks no banco:");
    allFeedbacks.forEach((fb) => {
      console.log(`- ${fb.name}: ${fb.rating}⭐ - "${fb.message}"`);
    });

    await closeDB();
    console.log("\n✅ Seed concluído!");
  } catch (error) {
    console.error("❌ Erro ao popular banco:", error);
    process.exit(1);
  }
}

seedDatabase();
