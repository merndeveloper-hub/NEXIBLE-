const mongoose = require("mongoose");
const SchemaType = require("../../types");

const eventSchema = new mongoose.Schema(
  {
    organizerName: {
      type: SchemaType.TypeString,
      // required: [true, "Please provide the organizer name"]
    },
    personName: {
      type: SchemaType.TypeString,
      //required: [true,"Please provide the person name"]
    },

    bundle_image: {
      image: {
        type: SchemaType.TypeArray,
      },

      image_url: {
        type: SchemaType.TypeArray,
      },
    },

    category: {
      type: SchemaType.TypeString,
      //required: [true,"Please provide the banner image"]
    },
    passImage: {
      type: SchemaType.TypeString,
      //required: [true,"Please provide the banner image"]
    },
    eventName: {
      type: SchemaType.TypeString,
      //required: [true,"Please provide the event name"]
    },

    description: {
      type: SchemaType.TypeString,
      //required: [true,"Please provide the description"]
    },

    loc: {
      type: SchemaType.TypeString,
      coordinates: [],
      // required: [true,"Please provide the location"]
    },
    price: {
      type: SchemaType.TypeString,
      //required: [true,"Please provide the event name"]
    },
    place: {
      type: SchemaType.TypeString,
      //required: [true,"Please provide the event name"]
    },

    totalticket: {
      type: SchemaType.TypeNumber,
      default: 100,
    },
    remainingticket: {
      type: SchemaType.TypeNumber,
      default: 100,
    },
    soldticket: {
      type: SchemaType.TypeNumber,
      default: 0,
    },

    status: {
      type: SchemaType.TypeString,
      enum: ["Sold", "Unsold"],
      default: "Unsold",
    },

    startDate: {
      type: SchemaType.TypeDate,
      default: new Date().toISOString(),
    },

    endDate: {
      type: SchemaType.TypeDate,
      default: new Date().toISOString(),
    },

    timeMin: {
      type: SchemaType.TypeDate,
      default: new Date().toISOString(),
    },

    userID: {
      type: SchemaType.TypeString,
    },

    timeinsec: {
      type: SchemaType.TypeNumber,
      default: new Date().getTime(),
    },
    nftPasses: [
      {
        passName: SchemaType.TypeString,
        price: SchemaType.TypeNumber,
        passType: SchemaType.TypeString,
        validity: SchemaType.TypeNumber,
        benefits: SchemaType.TypeString,
      },
    ],
  },
  { timestamps: true }
);

eventSchema.index({ location: "2dsphere" });

module.exports = eventSchema;
