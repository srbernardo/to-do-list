import jwt from 'jsonwebtoken'

import User from '../models/User.js'

export class SessionsController {
  async login (req, res) {
    const JWT_SECRET = '87ca67b30bbde0afa5eca5119163252f'
    const { username, password } = req.body

    const user = await User.findOne({ where: { username } })
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid Credentials.' })
    }

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1d' })
    return res.status(200).json({ Message: `Welcome ${username}`, token })
  }
}
