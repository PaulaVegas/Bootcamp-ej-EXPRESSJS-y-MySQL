const express = require("express");
const router = express.Router();
const UsersOrdersController = require("../controllers/UsersOrdersController");

router.get("/createTableUsersOrders", UsersOrdersController.createTable);
router.post("/createUserOrder", UsersOrdersController.addUserToOrder);
router.get("/", UsersOrdersController.getAll);

module.exports = router;
