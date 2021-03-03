const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/articles.controller');

router.post('/article', ArticleController.postArticles);

module.exports = router;