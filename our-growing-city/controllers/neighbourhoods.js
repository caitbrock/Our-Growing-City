const Neighbourhood = require("../models/neighbourhood.js");
const Data = require("../public/assets/ACTIVE - North Toronto - Neighbourhood 173.json")
JSON.stringify(Data);

function index(req, res) {
  console.log(Data);
  res.render(" development ", { Data });
}

module.exports = {
  index,
};