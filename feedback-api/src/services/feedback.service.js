const pool = require("../config/db");

class FeedbackService {
  async getAllFeedbacks() {
    const result = await pool.query(
      "SELECT * FROM feedbacks ORDER BY created_at DESC"
    );
    return result.rows;
  }

  async createFeedback(name, message, rating = 5) {
    const result = await pool.query(
      "INSERT INTO feedbacks (name, message, rating) VALUES ($1, $2, $3) RETURNING *",
      [name, message, rating]
    );
    return result.rows[0];
  }

  async getFeedbackById(id) {
    const result = await pool.query("SELECT * FROM feedbacks WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  }

  async deleteFeedback(id) {
    const result = await pool.query(
      "DELETE FROM feedbacks WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  }
}

module.exports = new FeedbackService();
