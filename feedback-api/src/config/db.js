const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on("connect", () => {
  console.log("✅ Conectado ao PostgreSQL");
});

pool.on("error", (err) => {
  console.error("❌ Erro na conexão com o banco:", err);
  process.exit(-1);
});

// Criar tabela se não existir
const initDatabase = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS feedbacks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("✅ Tabela de feedbacks verificada/criada");
  } catch (error) {
    console.error("❌ Erro ao criar tabela:", error);
  }
};

initDatabase();

module.exports = pool;
