const mysql = require("mysql2/promise");

async function connectToDb() {
  try {
    const connection = await mysql.createConnection({
      host            : process.env.DATABASE_HOST || "localhost",
      port            : process.env.MYSQL_PORT || "3306",
      user            : process.env.MYSQL_USER || "root",
      password        : process.env.MYSQL_PASSWORD || "supersecret",
      database        : process.env.MYSQL_DATABASE || "atlantic"
    });
    return connection;
  } catch(err){
    console.error("error connecting expected, will retry...");
    return process.exit(22); 
    //consistently exit so the Docker container will restart until it connects to the sql db
  }
};

module.exports = connectToDb;