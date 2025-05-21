const express = require("express");
const router = express.Router();
const DatabaseController = require("../controllers/databaseController");

router.get("/createdb", DatabaseController.createDatabase);

module.exports = router;
