const ArticlesModel = require('../models/article')

// Get All Article
const getAllArticle = async (req, res) => {
  try {
    const [data] = await ArticlesModel.getAllArticle();
    res.json({
      message: "success get data",
      data: data
    })
    
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error
    })
  }
}
// Get Detail Article
const getDetailArticleController = async (req, res) => {
  const {id} = req.params
  try {
    const [data] = await ArticlesModel.getDetailArticle(id);
    res.json({
      message: "success get data",
      data: data[0]
    })
    
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error
    })
  }
}

// Get Article With Pagination
const getPaginArticle = async (req, res) => {
  const queryParams = req.query 

  try {
    const [data] = await ArticlesModel.getPaginArticle(queryParams);
    const [countData] = await ArticlesModel.getCountArticle();
    res.json({
      message: "success",
      data: data,
      page: parseInt(queryParams.page),
      perPage: parseInt(queryParams.limit),
      totalPage: Math.ceil(countData[0].countData / parseInt(queryParams.limit)),
      totalData: countData[0].countData,
    })
    
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error
    })
  }
}

// Create New Article
const createNewArticle = async (req, res) => {
  const {body} = req;
  const file = req.file;
  const bodyArticle ={
    title: body.title,
    poster: file.originalname,
    url: `${req.protocol}://${req.get("host")}/assets/${file.filename}`
  }

  try {
    await ArticlesModel.createNewArticle(bodyArticle);
    res.status(201).json({
      message: "success",
      data: bodyArticle
    })
  } catch (error) {
    res.status(400).json({
      message: "server error",
      serverMessage: error
    })
  }
}

module.exports = {
  getAllArticle,
  getPaginArticle,
  createNewArticle,
  getDetailArticleController
}