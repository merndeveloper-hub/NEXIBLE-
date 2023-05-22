const mongoose = require("mongoose");
const categorySchema = require("./category-schema");

const category = mongoose.model("category", categorySchema);

module.exports = category;