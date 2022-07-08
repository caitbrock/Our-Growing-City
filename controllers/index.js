const Neighbourhood = require("../models/neighbourhood");

async function index(req, res) {
  const neighbourhoodData = await Development.find();
    res.render("index", { neighbourhoodData, user: req.user });
  };

module.exports = {
    index,
}