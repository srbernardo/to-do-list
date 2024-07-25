import express from 'express'

import taskRoutes from './routes/taskRoutes.js'

const app = express()

app.use(express.json())
app.use(taskRoutes)

app.listen(3000, () => {console.log('Rodando na porta 3000')})
