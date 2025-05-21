const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/createTableCategories", CategoriesController.createTable);
router.get(
	"/createTableProductCategories",
	CategoriesController.createTableProductCategories
);
router.post("/createCategory", CategoriesController.addCategory);
router.put("/category/:id", CategoriesController.update);
router.get("/categories", CategoriesController.getAll);
router.get("/categories/id/:id", CategoriesController.getById);

module.exports = router;
