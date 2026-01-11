// Use memória se DB não estiver disponível
const feedbackService = require("../services/feedback.service.memory");

class FeedbackController {
  async getAll(req, res) {
    try {
      const feedbacks = await feedbackService.getAllFeedbacks();
      res.json(feedbacks);
    } catch (error) {
      console.error("Erro ao buscar feedbacks:", error);
      res.status(500).json({ error: "Erro ao buscar feedbacks" });
    }
  }

  async create(req, res) {
    try {
      const { name, message, rating } = req.body;

      const feedback = await feedbackService.createFeedback(
        name,
        message,
        rating
      );

      res.status(201).json({
        message: "Feedback criado com sucesso!",
        feedback,
      });
    } catch (error) {
      console.error("Erro ao criar feedback:", error);
      res.status(500).json({ error: "Erro ao criar feedback" });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const feedback = await feedbackService.getFeedbackById(id);

      if (!feedback) {
        return res.status(404).json({ error: "Feedback não encontrado" });
      }

      res.json(feedback);
    } catch (error) {
      console.error("Erro ao buscar feedback:", error);
      res.status(500).json({ error: "Erro ao buscar feedback" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const feedback = await feedbackService.deleteFeedback(id);

      if (!feedback) {
        return res.status(404).json({ error: "Feedback não encontrado" });
      }

      res.json({ message: "Feedback deletado com sucesso", feedback });
    } catch (error) {
      console.error("Erro ao deletar feedback:", error);
      res.status(500).json({ error: "Erro ao deletar feedback" });
    }
  }
}

module.exports = new FeedbackController();
