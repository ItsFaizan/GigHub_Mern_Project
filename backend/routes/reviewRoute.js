import express from "express";
import { reviews, updatereview, deletereview } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/upload", reviews);
router.put("/:id", updatereview);
router.delete("/:id", deletereview);


export default router;