const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductsController");

router.get("/createTableProducts", ProductsController.createTable);
router.post("/createProduct", ProductsController.addProduct);
router.post("/addCategory", ProductsController.addProductToCategory);
router.put("/product/:id", ProductsController.update);
router.get("/products", ProductsController.getAll);
router.get("/products/id/:id", ProductsController.getById);
router.get(
	"/productsWithCategory/",
	ProductsController.getProductsWithCategories
);
router.get("/products/desc", ProductsController.getDesc);
router.get("/products/name/:name", ProductsController.getByName);
router.delete("/deleteProduct/:id", ProductsController.delete);

module.exports = router;
