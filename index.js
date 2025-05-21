const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/database.js");

app.use(express.json());

app.use("database", require("./routes/database"));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
