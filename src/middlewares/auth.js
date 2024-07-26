import jwt from 'jsonwebtoken'

const JWT_SECRET = '87ca67b30bbde0afa5eca5119163252f'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json({ error: 'Token was not provided.' })

  jwt.verify(token, JWT_SECRET, (err, username) => {
    if (err) return res.status(403).json({ error: 'Token inválido' })
    req.currentUser = username
    next()
  })
}
