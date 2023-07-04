const express = require("express");
const router = express.Router();
const upload = require('../middelware/multer.js')
const apiKeyValidate = require('../middelware/apiKeyValidate.js')

const ArticleController = require('../controller/article')

// USERS
router.get('/', apiKeyValidate, ArticleController.getAllArticle)
router.get('/paging', ArticleController.getPaginArticle)
router.post('/', upload.single('poster'), ArticleController.createNewArticle)

module.exports = router;