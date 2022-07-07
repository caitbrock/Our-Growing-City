var router = require("express").Router();
const { request } = require("express");
var usersCtrl = require("../controllers/users");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
// GET /users
router.get("/", isLoggedIn, usersCtrl.index);

module.exports = router;
