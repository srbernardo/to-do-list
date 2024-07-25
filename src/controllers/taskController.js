import db from "../database/config.js"

export class TaskController {
  index(req, res) {
    db.all("SELECT * FROM tasks", [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json(rows);
    });
  }

  show(req, res) {
    const { id } = req.params

    db.get('SELECT * FROM tasks WHERE id = ?', id, (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.status(404).json({ error: 'Resouce not found.' });
      }
      return res.status(200).json(row);
    });

  }

  create(req, res) {
    const { title } = req.body

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    db.run("INSERT INTO tasks (title) VALUES (?)", title, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(201).json({
        "message": "success",
        "data": {
            id: this.lastID,
            title
        }
      })
    })
  }

  update(req, res) {
    const { id } = req.params
    const { title } = req.body

    db.run('UPDATE tasks SET title = ? WHERE id = ?', [title, id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Resouce not found.' });
      }

      return res.status(201).json({
        "message": "Task updated with success",
        "data": {
            id ,
            title
        }
      })
    })
  }

  destroy(req, res) {
    const { id } = req.params

    db.run('DELETE FROM tasks WHERE id = ?', id, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Resouce not found.' });
      }

      return res.status(200).json({
        "message": "Task deleted with success"
      })
    })
  }
}
