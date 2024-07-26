import { Router } from 'express'

import { TasksController } from "../controllers/TasksController.js";

const router = new Router();
const tasksController = new TasksController()

router.get('/tasks', tasksController.index)
router.get('/tasks/:id', tasksController.show)
router.post('/tasks', tasksController.create)
router.put('/tasks/:id', tasksController.update)
router.delete('/tasks/:id', tasksController.destroy)

export default router
