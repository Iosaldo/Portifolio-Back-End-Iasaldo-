// Banco de dados em memória (para desenvolvimento/teste)
let feedbacks = [];

let nextId = 3;

class FeedbackService {
  async getAllFeedbacks() {
    // Retornar cópia ordenada por data (mais recente primeiro)
    return [...feedbacks].sort((a, b) => b.created_at - a.created_at);
  }

  async createFeedback(name, message, rating = 5) {
    const newFeedback = {
      id: nextId++,
      name,
      message,
      rating: parseInt(rating),
      created_at: new Date(),
    };

    feedbacks.push(newFeedback);
    return newFeedback;
  }

  async getFeedbackById(id) {
    return feedbacks.find((f) => f.id === parseInt(id));
  }

  async deleteFeedback(id) {
    const index = feedbacks.findIndex((f) => f.id === parseInt(id));
    if (index === -1) return null;

    const deleted = feedbacks[index];
    feedbacks.splice(index, 1);
    return deleted;
  }
}

module.exports = new FeedbackService();
