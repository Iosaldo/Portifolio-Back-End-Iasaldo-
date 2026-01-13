import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "feedbacks";

// Simple in-memory rate limiting for serverless
// In production, consider using Vercel KV, Redis, or Upstash
const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const record = rateLimitMap.get(ip);

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

function validateFeedback(body) {
  const { name, message, rating } = body;

  if (!name || name.trim().length < 2) {
    return { error: "Nome inválido. Deve ter pelo menos 2 caracteres." };
  }

  if (!message || message.trim().length < 10) {
    return { error: "Mensagem muito curta. Deve ter pelo menos 10 caracteres." };
  }

  const ratingNum = parseInt(rating);
  if (!rating || isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return { error: "Rating inválido. Deve ser entre 1 e 5." };
  }

  return null;
}

// GET /api/feedback - List all feedbacks
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME || "feedback_db");
    const feedbacks = await db
      .collection(COLLECTION_NAME)
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Convert _id to id for frontend compatibility
    const formattedFeedbacks = feedbacks.map((feedback) => ({
      ...feedback,
      id: feedback._id.toString(),
    }));

    return NextResponse.json(formattedFeedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return NextResponse.json(
      { error: "Erro ao buscar feedbacks" },
      { status: 500 }
    );
  }
}

// POST /api/feedback - Create new feedback
export async function POST(request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "unknown";
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Muitas requisições. Tente novamente em 1 minuto." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validation
    const validationError = validateFeedback(body);
    if (validationError) {
      return NextResponse.json(validationError, { status: 400 });
    }

    const { name, message, rating } = body;

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME || "feedback_db");

    const feedback = {
      name: name.trim(),
      message: message.trim(),
      rating: parseInt(rating),
      createdAt: new Date(),
    };

    const result = await db.collection(COLLECTION_NAME).insertOne(feedback);

    const createdFeedback = {
      id: result.insertedId.toString(),
      ...feedback,
    };

    return NextResponse.json(createdFeedback, { status: 201 });
  } catch (error) {
    console.error("Error creating feedback:", error);
    return NextResponse.json(
      { error: "Erro ao criar feedback" },
      { status: 500 }
    );
  }
}
