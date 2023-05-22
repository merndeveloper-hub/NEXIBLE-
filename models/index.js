const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.profile = require("./Profile");
db.userType = require("./user-type");
db.userOTPVerification = require("./otpVerification");
db.attempt = require("./attempt");
db.event = require("./event");
db.token = require("./token");
db.category = require("./category");
db.tickets = require("./Tickets");

module.exports = db;
