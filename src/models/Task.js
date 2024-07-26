import { DataTypes } from 'sequelize'

import sequelize from '../database/database.js'

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING
  }
})

export default Task
