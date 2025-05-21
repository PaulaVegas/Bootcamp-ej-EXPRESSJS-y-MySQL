const db = require("../config/database");

const CategoryController = {
	//Tabla createCategories
	createTable(req, res) {
		const sql = `CREATE TABLE categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(100) NOT NULL
    )`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send("Categories table created...");
		});
	},

	// Añadir categoría nueva
	addCategory(req, res) {
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
	},

	// Actualizar una categoría.
	update(req, res) {
		const { name, type } = req.body;
		const { id } = req.params;

		const sql = `UPDATE categories SET name = ?, type = ? WHERE id = ?`;
		const values = [name, type, id];

		db.query(sql, values, (err, result) => {
			if (err) throw err;
			res.send("Category updated...");
		});
	},

	// Mostrar todas las categorías
	getAll(req, res) {
		const sql = "SELECT * FROM categories";
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},

	// Seleccionar una categoría por id
	getById(req, res) {
		const { id } = req.params;
		const sql = `SELECT * FROM categories WHERE id = ?`;
		db.query(sql, [id], (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},
};

module.exports = CategoryController;
