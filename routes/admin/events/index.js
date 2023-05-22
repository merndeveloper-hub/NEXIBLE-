const express = require("express");
const upload = require("../../../lib/multer");
const createEvent = require("./create");

const router = express.Router();

//router.post("/create", upload.single("image"), createEvent);
// router.post("/create/:id", upload.array('image'), createEvent);
router.post(
  "/create/:id",
  upload.fields([
    { name: "image", maxCount: 10 },
    { name: "passImage", maxCount: 1 },
  ]),
  createEvent
);

module.exports = router;
