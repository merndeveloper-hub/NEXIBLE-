const express = require("express");
const upComingEvents = require("./events");


const router = express.Router();


//router.get("/upcomingevents/:id", upComingEvents);
router.get("/upcomingevents/", upComingEvents);


module.exports = router;