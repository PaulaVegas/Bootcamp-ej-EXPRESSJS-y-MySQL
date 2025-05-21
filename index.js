const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/database", require("./routes/database.js"));
app.use("/products", require("./routes/products.js"));
app.use("/categories", require("./routes/categories.js"));
app.use("/productCategories", require("./routes/productsCategories.js"));

app.get("/testdb", (req, res) => {
	const db = require("./config/database");
	db.query("SELECT 1 + 1 AS solution", (err, results) => {
		if (err) {
			console.error(err);
			return res.status(500).send("DB error");
		}
		res.send(`DB connected, result: ${results[0].solution}`);
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
