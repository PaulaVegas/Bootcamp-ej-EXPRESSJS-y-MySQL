const db = require("../config/database");

const DatabaseController = {
	//Crear base de datos
	create: (req, res) => {
		const sql = "CREATE DATABASE ejercicioExpressMySQL";
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send("Database created...");
		});
	},
};

module.exports = DatabaseController;
