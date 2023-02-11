const Seat = require("../models/seat.model.js");

exports.create = (req, res) => {
  console.log(req.body);

  res.send(req.body);
};
