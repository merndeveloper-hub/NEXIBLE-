const express = require("express");
const  upload  = require("../../../lib/multer");
const getProfile = require("./get");
const updateProfile = require("./update");
const createProfile = require("./create");
const updatePic = require("./updatePic");


const router = express.Router();

router.put(
  "/update/:id",
  upload.single("image"),
  updateProfile
);

router.put(
  "/updatepic/:id",
  upload.single("image"),
  updatePic
);
router.get("/get/:id", getProfile);

router.post("/create/:id", upload.single("image"), createProfile);

module.exports = router;
