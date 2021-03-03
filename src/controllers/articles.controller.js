const ArticleModel = require("../models/articles.model");

// post article
exports.postArticle = async (req, res) => {
    const articleReqData = new ArticleModel(req.body.article, req.body.authors);
    try {
        // ArticleModel.postArt(articleReqData) will insert to two tables, articles and authors_articles. 
        // If one insert fails then no insert will be commited to neither table
        await ArticleModel.postArt(articleReqData); 
        res.status(200).json({
            message: "data posted successfully",
            data: articleReqData.id
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

