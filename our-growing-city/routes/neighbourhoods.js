var express = require("express");
var router = express.Router();
const neighbourhoodCtrl = require("../controllers/neighbourhoods");

router.get("/neighbourhoods", neighbourhoodCtrl.index);

module.exports = router;
 