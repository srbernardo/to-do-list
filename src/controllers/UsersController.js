import User from '../models/User.js'

export class UsersController {
  async create(req, res) {
    try {
      const { username, createdAt, updatedAt } = await User.create(req.body)

      return res.status(201).json({ username, createdAt, updatedAt })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
