import express from "express"
import { createTask, deleteTask, getAllTasks, getSingleTask, likeTask, updateTask } from "../controllers/taskController.js"

const router = express.Router()

router.get("/",getAllTasks);
router.get("/:id",getSingleTask);
router.post("/",createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/likeTask', likeTask);

export default router