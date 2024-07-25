import express from 'express'

import taskRoutes from './routes/taskRoutes.js'
import sequelize from './database/database.js';

const app = express()

app.use(express.json())
app.use(taskRoutes)

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
