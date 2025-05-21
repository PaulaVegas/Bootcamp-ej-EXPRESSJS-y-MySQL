const express = require("express");
const router = express.Router();
const DatabaseController = require("../controllers/DatabaseController");

router.get("/createdb", databaseController.createDatabase);

module.exports = router;
