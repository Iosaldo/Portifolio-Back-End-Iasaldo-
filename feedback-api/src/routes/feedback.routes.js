import { Router } from "express";
import { createFeedback, getFeedbacks, deleteFeedback } from "../controllers/feedback.controller.js";
import rateLimit from "../middlewares/rateLimit.js";
import validate from "../middlewares/validate.js";

const router = Router();

router.get("/", getFeedbacks);
router.post("/", rateLimit, validate, createFeedback);
router.delete("/:id", deleteFeedback);

export default router;
