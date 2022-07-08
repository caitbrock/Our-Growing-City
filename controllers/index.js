const Neighbourhood = require("../models/neighbourhood")

async function index(req, res) {
  const neighbourhoodData = await Neighbourhood.find();
    res.render("index", { neighbourhoodData, user: req.user });
  };

module.exports = {
    index,
}