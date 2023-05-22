const express = require("express");
const eventList = require("./eventList");
const {foryouEventList,MyEventList,HostEventList,MemberEventList} = require("./foryouEventList");


const router = express.Router();


router.get("/getevents", eventList);
router.post("/foryouEvents", foryouEventList);
router.post("/MyEvents", MyEventList);
router.get("/HostEvents", HostEventList);
router.get("/MemberEvents", MemberEventList);


module.exports = router;