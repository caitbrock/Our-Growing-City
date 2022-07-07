const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.get("/", reviewsCtrl.index);
router.post("/:id/reviews", reviewsCtrl.create);
router.delete("/:id/reviews/:id", reviewsCtrl.delete);

module.exports = router;
