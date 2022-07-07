const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/show/:id", reviewsCtrl.create);
router.delete("/show/:id", reviewsCtrl.delete);

module.exports = router;
