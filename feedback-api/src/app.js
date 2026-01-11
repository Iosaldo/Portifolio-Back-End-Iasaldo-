const express = require("express");
const cors = require("cors");
require("dotenv").config();

const feedbackRoutes = require("./routes/feedback.routes");
const { apiLimiter } = require("./middlewares/rateLimit");

const app = express();

// Middlewares globais - CORS mais permissivo para desenvolvimento
app.use(
  cors({
    origin: "*", // Permitir todas as origens em dev
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiter global
app.use("/api", apiLimiter);

// Rotas
app.use("/api/feedback", feedbackRoutes);

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "API de Feedback - Rodando! ✅",
    version: "1.0.0",
    endpoints: {
      feedback: "/api/feedback",
    },
  });
});

// Rota 404
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Algo deu errado!",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

module.exports = app;
