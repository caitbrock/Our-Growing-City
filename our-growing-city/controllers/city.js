const Neighbourhood = require("../models/neighbourhood.js");
const neighbourhoodData = require("../public/assets/Toronto Neighbourhoods.json")
JSON.stringify(neighbourhoodData);

function index(req, res) {
  Neighbourhood.find({}, function (err, neighbourhood) {
    res.render("/", { neighbourhood });
  });
}

function show(req, res) {
  Neighbourhood.findById(req.params.id, function (err, neighbourhood) {
    res.render("/city", { neighbourhood });
  });
}

module.exports = {
  index,
};