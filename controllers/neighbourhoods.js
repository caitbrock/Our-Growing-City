// const developmentData = require("../public/assets/ACTIVE - North Toronto - Neighbourhood 173.json")
// JSON.stringify(developmentData);
const Development = require("../models/development");

async function index(req, res) {
  const developmentData = await Development.find();
  res.render("neighbourhoods", { developmentData, user: req.user });
  console.log("this is my data", developmentData);
}

module.exports = {
  index,
};
