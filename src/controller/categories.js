const CategoriesModel = require('../models/categories')

// Get All Users
const getCategoriesController = async (req, res) => {
  try {
    const [data] = await CategoriesModel.getCategoriesModel();
    res.json({
      message: "success",
      data: data
    })
    
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error
    })
  }
}

// Create New Category
const createCategoryController = async (req, res) => {
  const {body} = req;
  if(!body.category_name){
    return res.status(400).json({
      message: "Category name is required!",
      data: null
    })
  }
  try {
    const [checkData] = await CategoriesModel.checkAlreadyCategory(body.category_name);
    const checkExisting = checkData[0].length
    
    if (checkExisting === 0) { 
      await CategoriesModel.createCategoryModel(body);
      return res.status(201).json({
        message: "success",
        data: body
      })
    }else{
      return res.status(409).json({
        message: "Data already exists",
      })
    }
  } catch (error) {
    return res.status(400).json({
      message: "server error",
      serverMessage: error
    })
  }
}

const updateCategoryController = async (req, res) => {
  const { id } = req.params
  const {body} = req;

  if(!body.category_name){
    return res.status(400).json({
      message: "Category name is required!",
      data: null
    })
  }

  try {
    const [checkData] = await CategoriesModel.checkAlreadyCategory(body.category_name);
    const checkExisting = checkData[0].length
    if (checkExisting > 0) {
      res.status(409).json({
        message: "Data cannot be the same or data is already exists",
        serverMessage: error
      })
    } else{
      await CategoriesModel.updateCategoryModel(body, id);
      res.json({
        message: "success",
        data: {
          id: id,
          ...body
        }
      })
    }
  } catch (error) {
    res.status(409).json({
      message: "Data cannot be the same or data is already exists",
    })
  }
}

const deleteCategoryController = async (req, res) => {
  const { id } = req.params
  try {
    const [datas] = await CategoriesModel.deleteCategoryModel(id);
    if(datas.affectedRows > 0){
      res.json({
        message: "success delete category",
        data: {
          id: id
        }
      })
    }else{
      res.status(410).json({
        message: "Category already deleted",
      })
    }
  } catch (error) {
    res.status(400).json({
      message: "server error",
      serverMessage: error
    })
  }
}

module.exports = {
  getCategoriesController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController
}