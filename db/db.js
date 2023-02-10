const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

async function query(sql, params) {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const [results] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query,
};
// const connection = mysql.createConnection(process.env.DATABASE_URL);

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected to PlanetScale!");
// });

// module.exports = { connection };
