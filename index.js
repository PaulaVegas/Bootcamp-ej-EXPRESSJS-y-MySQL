const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/database", require("./routes/database"));
app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
