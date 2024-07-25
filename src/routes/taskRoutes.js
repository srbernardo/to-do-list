import { Router } from 'express'

import { TaskController } from "../controllers/taskController.js";

const router = new Router();
const taskController = new TaskController()

router.get('/tasks', taskController.index)
router.get('/tasks/:id', taskController.show)
router.post('/tasks', taskController.create)
router.put('/tasks/:id', taskController.update)
router.delete('/tasks/:id', taskController.destroy)

export default router
