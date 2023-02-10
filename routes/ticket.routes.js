module.exports = (app) => {
  const tickets = require("../controllers/ticket.controller.js");

  var router = require("express").Router();

  //create new ticket endpoint
  router.post("/", tickets.create);

  app.use("/api/v1/ticket", router);
};
