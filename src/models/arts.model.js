const connectToDb = require("../../config/db.config");

const Art  = function(art) {
    this.id = art.id;
    this.type = art.type;
}

Art.postArt = async (art) => {
    const connection = await connectToDb();
    const sqlQuery = `INSERT INTO arts (id, type) values (${art.id}, ${art.type}) ON DUPLICATE KEY UPDATE type=${art.type}`;
    await connection.query(sqlQuery);
}

Art.getArt = async (id) => {
    const connection = await connectToDb();
    const sqlQuery = `SELECT * FROM arts WHERE id=${id}`;
    return await connection.query(sqlQuery);
}

module.exports = Art