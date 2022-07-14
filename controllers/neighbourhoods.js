const Development = require("../models/development");
const passport = require("../config/passport");

async function index(req, res) {
  const developmentData = await Development.find();
  res.render("neighbourhoods", { developmentData, user: req.user });
}

function newDevelopment(req, res) {
  res.render("developments/new", { user: req.user });
}

function create(req, res) {
  req.body.APPLICATION_NUMBER = parseInt(req.body.APPLICATION_NUMBER);
  const development = new Development(req.body);
  development.save(function (err) {
    if (err) return res.render("developments/new", { user: req.user });
    res.redirect(`/neighbourhoods}`);
  });
}

module.exports = {
  index,
  new: newDevelopment,
  create,
};
