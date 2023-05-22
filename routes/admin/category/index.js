const express = require("express");
const getcategory = require("./get");
const createCategory = require("./create");
const allCategory = require("./allcategory");

const router = express.Router();


router.post("/createcategory", createCategory);
router.get("/getcategory", getcategory);
router.get("/allcategory", allCategory);

module.exports = router;