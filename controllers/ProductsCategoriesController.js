const db = require("../config/database");

const ProductsCategoriesController = {
	//Tabla intermedia createProductCategories
	createTableProductCategories(req, res) {
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
	},

	// Asociar un producto con una categoría
	addProductToCategory(req, res) {
		const { product_id, category_id } = req.body;
		const sql = `INSERT INTO productCategories (product_id, category_id) VALUES (?, ?)`;
		db.query(sql, [product_id, category_id], (err, result) => {
			if (err) throw err;
			res.send("Producto asociado a categoría.");
		});
	},

	// Mostrar todos los productos con sus categorías
	getAll(req, res) {
		const sql = `SELECT p.id, p.name AS product_name, c.name AS category_name
               FROM products p
               JOIN productCategories pc ON p.id = pc.product_id
               JOIN categories c ON pc.category_id = c.id`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},
};

module.exports = ProductsCategoriesController;
