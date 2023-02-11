const Ticket = require("../models/ticket.model.js");

exports.create = (req, res) => {
  console.log(req.body);

  res.send(req.body);
};

exports.getAll = async (req, res) => {
  let data = await Ticket.getAllTickets();
  console.log("from controller", data);
  // Ticket.getAllTickets((data) => {
  //   console.log("from controller: ", data);
  //   // if (err)
  //   //   res.status(500).send({
  //   //     message:
  //   //       err.message || "Some error occurred while retrieving tutorials.",
  //   //   });
  //   // else
  //   res.send(data);
  // });
  res.send(data);
};
