const express = require("express");
const searchevent = require("./get");
//const category = require("./category");

const router = express.Router();


router.post("/search", searchevent);
//router.get("/category", category);

module.exports = router;