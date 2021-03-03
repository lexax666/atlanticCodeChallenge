const connectToDb = require("../../config/db.config");

const Author = function(author) {
    this.id = author.id;
    this.slug = author.slug;
}

Author.postAuthor = async (author) => {
    const connection = await connectToDb();
    const sqlQuery =  `INSERT INTO authors (id, type) values (${author.id}, ${author.slug}) ON DUPLICATE KEY UPDATE slug=${author.slug}`;
    await connection.query(sqlQuery)
}

Author.getAuthor = async (id) => {
    const connection = await connectToDb();
    const sqlQuery = `SELECT * FROM authors where id=${id}`
    return await connection.query(sqlQuery)
}

module.exports = Author