import db from "../config/db.js";

export async function create(name, message, rating) {
  const result = await db.query(
    "INSERT INTO feedback (name, message, rating) VALUES ($1, $2, $3) RETURNING *",
    [name, message, rating]
  );

  return result.rows[0];
}

export async function getAll() {
  const result = await db.query(
    "SELECT * FROM feedback ORDER BY created_at DESC"
  );
  return result.rows;
}
