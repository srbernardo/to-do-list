import { Router } from 'express'

import { SessionsController } from '../controllers/SessionsController.js'

const router = new Router()
const sessionsController = new SessionsController()

router.post('/sessions/sign_in', sessionsController.login)

export default router
