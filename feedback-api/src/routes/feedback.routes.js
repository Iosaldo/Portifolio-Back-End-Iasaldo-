const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback.controller");
const { validateFeedback } = require("../middlewares/validate");
const { createFeedbackLimiter } = require("../middlewares/rateLimit");

// GET /api/feedback - Listar todos os feedbacks
router.get("/", feedbackController.getAll);

// GET /api/feedback/:id - Buscar feedback por ID
router.get("/:id", feedbackController.getById);

// POST /api/feedback - Criar novo feedback (com validação e rate limit)
router.post(
  "/",
  createFeedbackLimiter,
  validateFeedback,
  feedbackController.create
);

// DELETE /api/feedback/:id - Deletar feedback
router.delete("/:id", feedbackController.delete);

module.exports = router;
