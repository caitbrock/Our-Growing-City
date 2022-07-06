var express = require("express");
var router = express.Router();
const neighbourhoodCtrl = require("../controllers/neighbourhoods");

router.get("/", neighbourhoodCtrl.index);
router.get("/neighbourhoods/:id", neighbourhoodCtrl.show);

module.exports = router;
 