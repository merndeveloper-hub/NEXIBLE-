const mongoose = require("mongoose");
const ticketsSchema = require("./ticket-schema");

const tickets = mongoose.model("tickets", ticketsSchema);

module.exports = tickets;
