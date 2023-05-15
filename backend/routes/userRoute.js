import express from 'express';
import { deleteUser } from '../controllers/userController.js';
import { updateuser } from '../controllers/userController.js';
import { getUser } from '../controllers/userController.js';

const router = express.Router();

router.delete("/:id", deleteUser)
router.put("/:id", updateuser)
router.get("/:id", getUser)

export default router;

