import { Router } from 'express'

import { UsersController } from '../controllers/UsersController.js'

const router = new Router()
const usersController = new UsersController()

router.post('/users/sign_up', usersController.create)

export default router
