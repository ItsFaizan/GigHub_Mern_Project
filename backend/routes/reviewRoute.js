import express from "express";
import { reviews, updatereview, deletereview, getreview } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/upload", reviews);
router.put("/:id", updatereview);
router.delete("/:id", deletereview);
router.get("/:id", getreview)

export default router;