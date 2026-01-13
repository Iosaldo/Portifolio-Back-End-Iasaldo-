import { MongoClient } from "mongodb";

let db = null;
let client = null;

export async function connectDB() {
  if (db) return db;

  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
  const dbName = process.env.DB_NAME || "feedback_db";

  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log("✅ Conectado ao MongoDB");

    db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
    throw error;
  }
}

export async function getDB() {
  if (!db) {
    await connectDB();
  }
  return db;
}

export async function closeDB() {
  if (client) {
    await client.close();
    db = null;
    client = null;
    console.log("🔌 Desconectado do MongoDB");
  }
}
