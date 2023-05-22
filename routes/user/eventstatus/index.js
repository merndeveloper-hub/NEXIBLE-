const express = require("express");
const buyEvents = require("./buy");


const router = express.Router();

router.post("/:userId/buyevent/:id", buyEvents);


module.exports = router;
