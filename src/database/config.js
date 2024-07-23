import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./src/database/database.db')

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)");
});

export default db
