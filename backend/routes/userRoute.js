import express from 'express';
import { deleteUser } from '../controllers/userController.js';
import { updateuser } from '../controllers/userController.js';
import { getUser } from '../controllers/userController.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

router.delete("/:id",verifyToken, deleteUser)
router.put("/:id", updateuser)
router.get("/get_user_info/:id", getUser)

export default router;

