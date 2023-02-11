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

Ticket.getAllTickets = async () => {
  let query = "SELECT * FROM Ticket";
  console.log("here");
  // let result = await new Promise((resolve, reject) => {
  //   db.query(query, (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       reject(err);
  //     } else {
  //       console.log("tickets: ", res);
  //       resolve(res);
  //     }
  //   });
  // });
  let result = await db.query(query);
  console.log("From model", result);
  return result;
};

module.exports = Ticket;
