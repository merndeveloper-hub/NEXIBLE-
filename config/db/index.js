const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_NAME } = require("../");

console.log(DB_USER,"DB_USER....");

mongoose.set('strictQuery', true);
mongoose.connect(
	`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.jfaucq0.mongodb.net/?retryWrites=true&w=majority`

);

module.exports = mongoose;

