const express = require("express");
const profile = require("./profile");
const eventList = require("./eventList");
const upComingEvents = require("./upcomingevents.js");
const popupEvent = require("./popupEvent");
const getData = require("./search");
const eventstatus = require("./eventstatus");


const router = express.Router();


router.use("/profile", profile);
router.use("/eventlist", eventList);
router.use("/eventlist", upComingEvents);
router.use("/popevents", popupEvent);
router.use("/getData", getData);
router.use("/eventstatus", eventstatus );

module.exports = router;