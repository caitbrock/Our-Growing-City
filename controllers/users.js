const User = require("../models/user");
const passport = require("../config/passport");

function index(req, res, next) {
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  let sortKey = req.query.sort || "name";
  User.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, users) {
      if (err) return next(err);
      res.render("/login", {
        user,
        name: req.query.name,
        sortKey,
        user: req.user,
      });
    });
}

module.exports = {
  index,
};