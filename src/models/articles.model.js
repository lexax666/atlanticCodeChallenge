const connectToDb = require("../../config/db.config");
const AuthorArticleModel = require("./authorArticle.model");
const Article = function(article, authors) {
    this.id = article.id;
    this.slug = article.slug;
    this.title = article.title;
    this.dek = article.dek;
    this.published_date = article.published_date;
    this.canonical_url = article.canonical_url;
    this.word_count = article.word_count;
    this.tags = article.tag;
    this.embeds = article.embeds;
    this.lead_art = article.lead_art;
    this.authors = authors;
}

Article.postArticle = async (article) => {
    const connection = await connectToDb();
    const sqlQuery = `INSERT INTO articles (id, slug, title, dek, published_date, canonical_url, word_count, tags, embeds, lead_art_id) 
    values (${article.id}, 
        ${article.slug}, 
        ${article.title}, 
        ${article.dek}, 
        STR_TO_DATE(${article.published_date}), 
        ${article.canonical_url}, ${article.word_count}, 
        ${article.tags}, 
        ${article.embeds}, 
        ${article.lead_art.id})
    ON DUPLICATE KEY UPDATE slug=${article.slug},
    title=${article.title}, 
    dek=${article.dek},
    published_date=${article.published_date}, 
    word_count=${article.word_count}, 
    tags=${article.tags}, 
    embeds=${article.embeds}, 
    lead_art_id=${article.lead_art.id}`;
    await connection.query(sqlQuery);

    // todo: use Transcation so if one of the tables (the article table, or the authors_articles table) fails to update/insert, 
    // then all tables should not be updated. (not implemented due to time constraint)
    for (const author in article.authors){ 
        let AuthorArticleReqData = AuthorArticleModel({authorId: author.id, article: article.id});
        await AuthorArticleModel.postAuthorArticle(AuthorArticleReqData);
    }
}

Article.getArticle = async (id) => {
    const connection = await connectToDb();
    const sqlQuery = `SELECT * FROM articles WHERE id=${id}`
    return await connection.query(sqlQuery);
}

module.exports = Article