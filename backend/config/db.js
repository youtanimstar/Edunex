const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "your_mysql_user",
  password: process.env.DB_PASSWORD || "your_mysql_password",
  database: process.env.DB_NAME || "your_database_name",
});


pool.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + pool.threadId);
});



exports.pool = pool;
