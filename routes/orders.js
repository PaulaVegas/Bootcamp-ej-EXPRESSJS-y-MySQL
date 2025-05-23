const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/OrdersController");

router.get("/createTableOrders", OrdersController.createTable);
router.post("/createOrder", OrdersController.addOrder);
router.get("/", OrdersController.getAll);

module.exports = router;
