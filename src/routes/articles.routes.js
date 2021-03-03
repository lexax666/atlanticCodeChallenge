const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/articles.controller');

router.post('/', ArticleController.postArticle);

module.exports = router;