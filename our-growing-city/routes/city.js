var express = require("express");
var router = express.Router();
const cityCtrl = require("../controllers/city");

router.get("/city", cityCtrl.index);

module.exports = router;
