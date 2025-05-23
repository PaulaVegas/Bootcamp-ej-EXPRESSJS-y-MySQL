const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

router.get("/createTableUsers", UsersController.createTable);
router.post("/createUser", UsersController.addUser);
router.put("/user/:id", UsersController.update);
router.get("/", UsersController.getAll);
router.delete("/deleteUser/:id", UsersController.delete);
router.get("/id/:id", UsersController.getById);

module.exports = router;
