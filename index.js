import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/api/v1", (req, res) => {
  res.json({ msg: "poai api v1.0" });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
