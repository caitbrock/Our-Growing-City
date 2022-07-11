var express = require("express");
var router = express.Router();
const developmentsCtrl = require("../controllers/developments");

router.get("/", developmentsCtrl.index);
router.get("/new", developmentsCtrl.new);
router.get("/:id", developmentsCtrl.show);
router.get("/:id/edit", developmentsCtrl.edit);
router.put("/:id", developmentsCtrl.update);
router.post("/", developmentsCtrl.create);

module.exports = router;
