const User = require("../models/user");
const passport = require("../config/passport");

async function index(req, res) {
  const user = await User.find();
    res.render("/", { user: req.user, user });
  };

module.exports = {
  index,
};