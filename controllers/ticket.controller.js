const Ticket = require("../models/ticket.model.js");

exports.create = (req, res) => {
  console.log(req.body);

  res.send(req.body);
};
