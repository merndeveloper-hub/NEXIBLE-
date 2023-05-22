const express = require("express");
const router = express.Router();


const events = require("./events");
const manageEvents = require("./manageEvents");
const category = require("./category");
//const notification = require("./notification");


router.use("/event", events);
router.use("/manageevent", manageEvents);
router.use("/category", category);
//router.use("/notification", notification);

module.exports = router;
