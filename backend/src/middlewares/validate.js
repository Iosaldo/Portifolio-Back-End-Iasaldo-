export default function validate(req, res, next) {
  const { name, message, rating } = req.body;

  if (!name || name.length < 2) {
    return res.status(400).json({ error: "Nome inválido" });
  }

  if (!message || message.length < 10) {
    return res.status(400).json({ error: "Mensagem muito curta" });
  }

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Rating inválido" });
  }

  next();
}
