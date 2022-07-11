var router = require("express").Router();
const { request } = require("express");
var userCtrl = require("../controllers/users");
const passport = require('passport');

router.get('/', userCtrl.index);
router.get("/show", userCtrl.show);

module.exports = router;
