const express = require("express");
const router = express.Router();
const ProductsCategoriesController = require("../controllers/ProductsCategoriesController");

router.get(
	"/createTableProductCategories",
	ProductsCategoriesController.createTableProductCategories
);
router.post("/addCategory", ProductsCategoriesController.addProductToCategory);
router.get("/productsWithCategory/", ProductsCategoriesController.getAll);
module.exports = router;
