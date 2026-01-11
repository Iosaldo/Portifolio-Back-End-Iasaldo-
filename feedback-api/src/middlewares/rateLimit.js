const rateLimit = require("express-rate-limit");

// Limite de criação de feedback: 3 por hora por IP
const createFeedbackLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 3, // 3 requisições
  message: {
    error: "Muitas requisições. Por favor, tente novamente mais tarde.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Limite geral da API: 100 requisições por 15 minutos
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100,
  message: {
    error: "Muitas requisições. Por favor, tente novamente mais tarde.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  createFeedbackLimiter,
  apiLimiter,
};
