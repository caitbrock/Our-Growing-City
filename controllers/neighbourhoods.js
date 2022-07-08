const Development = require("../models/development");
const passport = require("../config/passport");

async function index(req, res) {
  const developmentData = await Development.find();
  res.render("neighbourhoods", { developmentData, user: req.user });
}

module.exports = {
  index,
};
