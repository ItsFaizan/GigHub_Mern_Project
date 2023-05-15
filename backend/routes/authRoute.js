import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/user_register", register)
router.post("/user_login", login)
router.post("/user_logout", logout)

export default router;