const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/createTableProducts", ProductController.createTable);
router.post("/createProduct", ProductController.addProduct);
router.put("/:id", ProductController.update);
router.get("/", ProductController.getAll);
router.get("/id/:id", ProductController.getById);
router.get("/desc", ProductController.getDesc);
router.get("/name/:name", ProductController.getByName);
router.delete("/deleteProduct/:id", ProductController.delete);

module.exports = router;
