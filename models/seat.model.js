const db = require("../db/db.js");

const Seat = function (seat) {
  this.row = seat.row;
  this.seat_no = seat.seat_no;
};

Seat.create = (newSeat, result) => {
  db.query("INSERT INTO tickets SET ?", newSeat, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created seat: ", { id: res.insertId, ...newSeat });
    result(null, { id: resultId, ...newSeat });
  });
};
