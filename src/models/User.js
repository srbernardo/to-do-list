import { DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'

import sequelize from '../database/database.js'

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 4,
      notNull: true,
      notEmpty: true
    }
  }
})

User.beforeCreate(async user => {
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)
})

User.prototype.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

export default User
