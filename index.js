const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1", (req, res) => {
  res.json({ msg: "poai api v1.0" });
});

require("./routes/ticket.routes.js")(app);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
