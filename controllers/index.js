const Neighbourhood = require("../models/neighbourhood")
const passport = require("passport");

async function index(req, res) {
  const neighbourhoodData = await Neighbourhood.find();
    res.render("index", { neighbourhoodData, user: req.user });
  };

module.exports = {
    index,
}