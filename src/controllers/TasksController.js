import Task from '../models/Task.js'

export class TasksController {
  async index(req, res) {
    const tasks = await Task.findAll()

    return res.status(200).json(tasks)
  }

  async show(req, res) {
    const { id } = req.params
    const task = await Task.findByPk(id)

    if (!task) {
      return res.status(404).json({ error: 'Task not found.'})
    }

    return res.json(task)
  }

  async create(req, res) {
    const task = await Task.create({
      ...req.body
    })

    return res.status(201).json(task)
  }

  async update(req, res) {
    const { id } = req.params

    const task = await Task.update({ ...req.body }, { where: { id } })
    if (!task[0]) {
      return res.status(404).json({ error: 'Task not found.' })
    }

    return res.status(200).json({ message: 'Task updated wiht sucess'})
  }

  async destroy(req, res) {
    const { id } = req.params

    const result = await Task.destroy({ where: { id } })
    if (!result) {
      return res.status(404).json({ error: 'Task not found.' })
    }

    return res.status(200).json({ message: 'Task destroyed with success' })
  }
}
