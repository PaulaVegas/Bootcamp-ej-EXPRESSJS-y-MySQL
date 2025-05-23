const db = require("../config/database");

const ProductController = {
	//Tabla createProducts
	createTable(req, res) {
		const sql = `CREATE TABLE products (
   id int AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255),
   price DECIMAL(10, 2)
 )`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			console.log(result);
			res.send("Product table created...");
		});
	},

	// Añadir producto nuevo
	addProduct(req, res) {
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
	},

	// Actualizar un producto.
	update(req, res) {
		const { name, price } = req.body;
		const { id } = req.params;

		const sql = `UPDATE products SET name = ?, price = ? WHERE id = ?`;
		const values = [name, price, id];

		db.query(sql, values, (err, result) => {
			if (err) throw err;
			res.send("Product updated...");
		});
	},

	// Mostrar todos los productos
	getAll(req, res) {
		const sql = "SELECT * FROM products";
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},

	// Seleccionar un producto por id
	getById(req, res) {
		const { id } = req.params;
		const sql = `SELECT * FROM products WHERE id = ?`;
		db.query(sql, [id], (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},

	// Mostrar de forma descendente los productos.
	getDesc(req, res) {
		const sql = `SELECT * FROM products ORDER BY id DESC`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},

	// Buscar un producto por su nombre
	getByName(req, res) {
		const { name } = req.params;
		const sql = `SELECT * FROM products WHERE name LIKE ?`;
		db.query(sql, [`%${name}%`], (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},

	// Eliminar un producto
	delete(req, res) {
		const { id } = req.params;
		const sql = `DELETE FROM products WHERE id = ?`;
		db.query(sql, [id], (err, result) => {
			if (err) throw err;
			res.send("Product deleted...");
		});
	},
};

module.exports = ProductController;
