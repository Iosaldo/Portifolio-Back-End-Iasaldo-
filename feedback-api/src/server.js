import "dotenv/config";
import app from "./app.js";
import { connectDB, closeDB } from "./config/database.js";

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("🚀 API running on port " + PORT);
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar servidor:");
    console.error("Mensagem:", error.message);
    console.error("Detalhes:", error);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  await closeDB();
  process.exit(0);
});

startServer();
