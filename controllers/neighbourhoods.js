const Development = require("../models/development");

async function index(req, res) {
  const developmentData = await Development.find();
  res.render("neighbourhoods", { developmentData, user: req.user });
}

module.exports = {
  index,
};
