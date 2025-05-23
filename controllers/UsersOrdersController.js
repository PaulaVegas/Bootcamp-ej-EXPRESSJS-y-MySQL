const db = require("../config/database");

const UsersOrdersController = {
  // Tabla users_orders
  createTable(req, res) {
    const sql = `CREATE TABLE users_orders (
            id int AUTO_INCREMENT PRIMARY KEY,
            user_id int,
            order_id int,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (order_id) REFERENCES orders(id)
        )`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Users_Orders table created...");
    });
  },

  // Añadir usuario a un pedido
  addUserToOrder(req, res) {
    const userOrder = {
      user_id: req.body.user_id,
      order_id: req.body.order_id,
    };
    const sql = "INSERT INTO users_orders SET ?";

    db.query(sql, userOrder, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("User added to order...");
    });
  },
  // Mostrar todos los usuarios con sus pedidos
  getAll(req, res) {
    const sql = `SELECT u.id AS user_id, u.name AS user_name, o.id AS order_id, o.product_id, o.quantity
                FROM users u
                JOIN users_orders uo ON u.id = uo.user_id
                JOIN orders o ON uo.order_id = o.id`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
module.exports = UsersOrdersController;
