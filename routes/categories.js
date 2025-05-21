const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/createTableCategories", CategoryController.createTable);
router.get(
	"/createTableProductCategories",
	CategoryController.createTableProductCategories
);
router.post("/createCategory", CategoryController.addCategory);
router.put("/category/:id", CategoryController.update);
router.get("/categories", CategoryController.getAll);
router.get("/categories/id/:id", CategoryController.getById);

module.exports = router;
