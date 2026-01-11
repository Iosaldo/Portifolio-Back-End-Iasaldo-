import { getDB } from "../config/database.js";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "feedbacks";

export async function getAll() {
  const db = await getDB();
  const feedbacks = await db
    .collection(COLLECTION_NAME)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  // Converter _id para id para compatibilidade com frontend
  return feedbacks.map((feedback) => ({
    ...feedback,
    id: feedback._id.toString(),
  }));
}

export async function create(name, message, rating) {
  const db = await getDB();

  const feedback = {
    name,
    message,
    rating: parseInt(rating),
    createdAt: new Date(),
  };

  const result = await db.collection(COLLECTION_NAME).insertOne(feedback);

  return {
    id: result.insertedId.toString(),
    ...feedback,
  };
}

export async function getById(id) {
  const db = await getDB();

  if (!ObjectId.isValid(id)) {
    return null;
  }

  const feedback = await db
    .collection(COLLECTION_NAME)
    .findOne({ _id: new ObjectId(id) });

  return feedback;
}

export async function deleteById(id) {
  const db = await getDB();

  if (!ObjectId.isValid(id)) {
    return false;
  }

  const result = await db
    .collection(COLLECTION_NAME)
    .deleteOne({ _id: new ObjectId(id) });

  return result.deletedCount > 0;
}
