const db = require("../config/database");

const OrdersController = {
  // Tabla orders
  createTable(req, res) {
    const sql = `CREATE TABLE orders (
            id int AUTO_INCREMENT PRIMARY KEY,
            user_id int,
            product_id int,
            quantity int,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (product_id) REFERENCES products(id)
        )`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Orders table created...");
    });
  },

  // Añadir pedido nuevo
  addOrder(req, res) {
    const order = {
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      quantity: req.body.quantity,
    };
    const sql = "INSERT INTO orders SET ?";

    db.query(sql, order, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Order added...");
    });
  },

  // Mostrar todos los pedidos
  getAll(req, res) {
    const sql = "SELECT * FROM orders";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};

module.exports = OrdersController;
