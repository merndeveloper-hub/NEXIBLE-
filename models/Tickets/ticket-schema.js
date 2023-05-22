const mongoose = require("mongoose");
const SchemaType = require("../../types");

const ticketsSchema = new mongoose.Schema(
  {
    eventID: {
      type: SchemaType.TypeString,
    },
    nftPassId: {
      type: SchemaType.TypeString,
    },
    userID: {
      type: SchemaType.TypeString,
    },
  },
  { timestamps: true }
);

module.exports = ticketsSchema;
