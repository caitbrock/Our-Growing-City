var express = require("express");
var router = express.Router();
const neighbourhoodCtrl = require("../controllers/neighbourhoods");

router.get("/", neighbourhoodCtrl.index);
router.get("/new", neighbourhoodCtrl.new);
router.post("/", neighbourhoodCtrl.create);

module.exports = router;
