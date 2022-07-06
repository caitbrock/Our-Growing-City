const Neighbourhood = require("../models/neighbourhood.js");

function index(req, res) {
  Neighbourhood.find({}, function (err, neighbourhood) {
    res.render("/city", { neighbourhood });
  });
}

module.exports = {
  index,
};