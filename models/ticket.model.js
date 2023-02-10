const db = require("../db/db.js");

const Ticket = function (ticket) {
  this.id = ticket.id;
  this.name = ticket.name;
};

Ticket.create = (newTicket, result) => {
  db.query("INSERT INTO tickets SET ?", newTicket, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created ticket: ", { id: res.insertId, ...newTicket });
    result(null, { id: resultId, ...newTicket });
  });
};
