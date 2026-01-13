import express from "express";
import cors from "cors";
import feedbackRoutes from "./routes/feedback.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/feedback", feedbackRoutes);

app.get("/", (_req, res) => {
  res.send("Portfolio API is up. Use /api/feedback for feedback endpoints.");
});

export default app;
