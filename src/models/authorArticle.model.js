const connectToDb = require("../../config/db.config");
const AuthorArticle = function(data) {
    this.authorId = data.authorId;
    this.articleId = data.articleId;
}

AuthorArticle.postAuthorArticle = async (data) => {
    const connection = await connectToDb();
    const sqlQuery = `INSERT INTO authors_articles (authorId, articleId) values (${data.authorId} ${data.articleId})`;
    await connection.query(sqlQuery);
}