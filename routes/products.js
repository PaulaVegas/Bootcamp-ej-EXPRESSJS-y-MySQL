const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/createTableProducts", ProductController.createTable);
router.post("/createProduct", ProductController.addProduct);
router.post("/addCategory", ProductController.addProductToCategory);
router.put("/product/:id", ProductController.update);
router.get("/products", ProductController.getAll);
router.get("/products/id/:id", ProductController.getById);
router.get(
	"/productsWithCategory/",
	ProductController.getProductsWithCategories
);
router.get("/products/desc", ProductController.getDesc);
router.get("/products/name/:name", ProductController.getByName);
router.delete("/deleteProduct/:id", ProductController.delete);

module.exports = router;
