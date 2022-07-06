var express = require("express");
var router = express.Router();
const cityCtrl = require("../controllers/city");

router.get("/city", cityCtrl.index);
router.get("/city/:id", cityCtrl.show);


module.exports = router;
