const db = require("../config/database");

const UsersController = {
  // Tabla users
  createTable(req, res) {
    const sql = `CREATE TABLE users (
            id int AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
        )`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Users table created...");
    });
  },

  // Añadir usuario nuevo
  addUser(req, res) {
    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    const sql = "INSERT INTO users SET ?";

    db.query(sql, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("User added...");
    });
  },

  // Actualizar un usuario
  update(req, res) {
    const { name, email } = req.body;
    const { id } = req.params;

    const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
    const values = [name, email, id];

    db.query(sql, values, (err, result) => {
      if (err) throw err;
      res.send("User updated...");
    });
  },

  // Mostrar todos los usuarios
  getAll(req, res) {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  // Mostrar un usuario por id
  getById(req, res) {
    const { id } = req.params;
    const sql = `SELECT * FROM users WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  // Eliminar un usuario
  delete(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM users WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.send("User deleted...");
    });
  },
};

module.exports = UsersController;
