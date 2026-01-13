import * as service from "../services/feedback.service.mongodb.js";

export async function createFeedback(req, res) {
  const { name, message, rating } = req.body;

  const feedback = await service.create(name, message, rating);

  res.status(201).json(feedback);
}

export async function getFeedbacks(req, res) {
  const list = await service.getAll();
  res.json(list);
}

export async function deleteFeedback(req, res) {
  await service.remove(req.params.id);
  res.status(204).end();
}
