const express = require("express");
const app = express();
const mysql = require("mysql2");
app.use(express.json());
const PORT = 3000;

// EJERCICIO 1
const db = mysql.createConnection({
  host: "localhost",
  user: "Paula",
  password: "123456",
  database: "ejercicioExpressMySQL",
});

db.connect();

//Crear base de datos
app.get("/createdb", (req, res) => {
  const sql = "CREATE DATABASE ejercicioExpressMySQL";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Database created...");
  });
});

//Tabla createProducts
app.get("/createTableProducts", (req, res) => {
  const sql = `CREATE TABLE products (
   id int AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255), 
   price DECIMAL(10, 2)
 )`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Users table created...");
  });
});

//Tabla createCategories
app.get("/createTableCategories", (req, res) => {
  const sql = `CREATE TABLE categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(100) NOT NULL
    )`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Categories table created...");
  });
});

//Tabla intermedia createProductCategories
app.get("/createProductCategories", (req, res) => {
  const sql = `CREATE TABLE productCategories (
        product_id INT,
        category_id INT,
        PRIMARY KEY (product_id, category_id),
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (category_id) REFERENCES categories(id)
    )`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("productCategories table created...");
  });
});

//EJERCICIO 2
// Añadir producto nuevo
app.post("/addProduct", (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  const sql = "INSERT INTO products SET ?";

  db.query(sql, product, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Product added...");
  });
});

// Añadir categoría nueva
app.post("/addCategory", (req, res) => {
  const category = {
    name: req.body.name,
    type: req.body.type,
  };
  const sql = "INSERT INTO categories SET ?";

  db.query(sql, category, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Category added...");
  });
});

// Asociar un producto con una categoría
app.post("/addProductToCategory", (req, res) => {
  const { product_id, category_id } = req.body;
  const sql = `INSERT INTO productCategories (product_id, category_id) VALUES (?, ?)`;
  db.query(sql, [product_id, category_id], (err, result) => {
    if (err) throw err;
    res.send("Producto asociado a categoría.");
  });
});

// EJERCICIO 3
// Actualizar un producto.
app.put("/products/id/:id", (req, res) => {
  const { name, price } = req.body;
  const { id } = req.params;

  const sql = `UPDATE products SET name = ?, price = ? WHERE id = ?`;
  const values = [name, price, id];

  db.query(sql, values, (err, result) => {
    if (err) throw err;
    res.send("Product updated...");
  });
});

// Actualizar una categoría.
app.put("/category/id/:id", (req, res) => {
  const { name, type } = req.body;
  const { id } = req.params;

  const sql = `UPDATE categories SET name = ?, type = ? WHERE id = ?`;
  const values = [name, type, id];

  db.query(sql, values, (err, result) => {
    if (err) throw err;
    res.send("Category updated...");
  });
});

// EJERCICIO 4
// Mostrar todos los productos
app.get("/showProducts", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Mostrar todas las categorías
app.get("/showCategories", (req, res) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Mostrar todos los productos con sus categorías
app.get("/showProductsWithCategories", (req, res) => {
  const sql = `SELECT p.id, p.name AS product_name, c.name AS category_name
               FROM products p
               JOIN productCategories pc ON p.id = pc.product_id
               JOIN categories c ON pc.category_id = c.id`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Seleccionar un producto por id
app.get("/products/id/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM products WHERE id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Mostrar de forma descendente los productos.
app.get("/products/desc", (req, res) => {
  const sql = `SELECT * FROM products ORDER BY id DESC`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Seleccionar una categoría por id
app.get("/category/id/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM categories WHERE id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Buscar un producto por su nombre
app.get("/products/name/:name", (req, res) => {
  const { name } = req.params;
  const sql = `SELECT * FROM products WHERE name LIKE ?`;
  db.query(sql, [`%${name}%`], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// EJERCICIO 5
// Eliminar un producto

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
