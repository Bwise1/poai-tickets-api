import mysql from "mysql2";
import dotenv from "dotenv";

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to PlanetScale!");
});

module.exports = connection;
