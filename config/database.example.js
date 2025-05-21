const mysql = require("mysql2");

const db = mysql.createConnection({
	host: "localhost",
	user: "someuser",
	password: "somepassword",
	database: "ejercicioExpressMySQL",
});

db.connect();

module.exports = db;
