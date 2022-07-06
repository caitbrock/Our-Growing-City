var express = require("express");
var router = express.Router();
const developmentsCtrl = require("../controllers/developments");

router.get("/developments", developmentsCtrl.index);
router.post("/developments", developmentsCtrl.create);
router.get("/developments/new", developmentsCtrl.new);
router.get("/developments/:id", developmentsCtrl.show);
router.get("/developments/:id/edit", developmentsCtrl.edit);
router.put("/developments/:id", developmentsCtrl.update);

module.exports = router;