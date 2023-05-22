const mongoose = require("mongoose");
const SchemaType = require("../../types");

const profileSchema = new mongoose.Schema(
  {
    username: {
      type: SchemaType.TypeString,
    },
    email: {
      type: SchemaType.TypeString,
    },
    wallet: {
      type: SchemaType.TypeString,
    },
    city: {
      type: SchemaType.TypeString,
    },

    gender: {
      type: SchemaType.TypeString,
      //enum: ["Male", "Female", "Other"]
    },
    category: {
      type: SchemaType.TypeString,
      categories: [],
      default: "Choose your interest",
    },
    preference: {
      type: SchemaType.TypeString,
    },
    profile_img: {
      type: SchemaType.TypeString,
    },
    profile_img_url: {
      type: SchemaType.TypeString,
    },
    userID: {
      type: SchemaType.TypeString,
    },
    company_description: {
      type: SchemaType.TypeString,
    },
    login_prefrence: {
      type: SchemaType.TypeString,
    },
    verified: {
      type: SchemaType.TypeBoolean,
    },
  },
  { timestamps: true }
);

module.exports = profileSchema;
