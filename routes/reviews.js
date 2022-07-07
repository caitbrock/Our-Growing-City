const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/:id/reviews", reviewsCtrl.create);
router.delete("/:id/reviews/:rid", reviewsCtrl.delete);

module.exports = router;
