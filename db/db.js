const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

let connection;
async function createConnection() {
  connection = await mysql.createConnection(process.env.DATABASE_URL);
}
async function query(sql) {
  if (!connection) {
    console.log("here from connection");
    await createConnection();
  }
  const [results] = await connection.query(sql);
  console.log(results);

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
