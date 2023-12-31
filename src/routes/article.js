const express = require("express");
const router = express.Router();
const upload = require('../middelware/multer.js')

const ArticleController = require('../controller/article')

// USERS
router.get('/', ArticleController.getAllArticle)
router.get('/detail/:id', ArticleController.getDetailArticleController)
router.get('/pagination', ArticleController.getPaginArticle)
router.post('/', upload.single('poster'), ArticleController.createNewArticle)

module.exports = router;