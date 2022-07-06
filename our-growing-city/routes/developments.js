var express = require("express");
var router = express.Router();
const developmentsCtrl = require("../controllers/developments");

router.get("/", developmentsCtrl.index);
router.post("/", developmentsCtrl.create);
router.get("/new", developmentsCtrl.new);
router.get("/show/:id", developmentsCtrl.show);
router.get("/:id/edit", developmentsCtrl.edit);
router.put("/:id", developmentsCtrl.update);

module.exports = router;
