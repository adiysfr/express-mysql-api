const express = require("express");
const router = express.Router();

const CategoryController = require('../controller/categories.js')

// CATEGORIES
router.get('/', CategoryController.getCategoriesController)
router.post('/', CategoryController.createCategoryController)
router.patch('/:id', CategoryController.updateCategoryController)
router.delete('/:id', CategoryController.deleteCategoryController)

module.exports = router;