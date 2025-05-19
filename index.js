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
        FOREIGN KEY (product_id) REFERENCES Products(id),
        FOREIGN KEY (category_id) REFERENCES Categories(id)
    )`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("productCategories table created...");
  });
});

//EJERCICIO 2
// Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde postman
// Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde postman

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
