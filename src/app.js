import express from 'express'

import auth from './middlewares/auth.js'
import taskRoutes from './routes/taskRoutes.js'
import userRoutes from './routes/userRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'
import sequelize from './database/database.js';

const app = express()

app.use(express.json())
app.use(sessionRoutes)
app.use(auth)
app.use(taskRoutes)
app.use(userRoutes)

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
