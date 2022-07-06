const Neighbourhood = require("../models/neighbourhood.js");
const Data = require("../public/assets/ACTIVE - North Toronto - Neighbourhood 173.json")
JSON.stringify(Data);

function index(req, res) {
  console.log(Data2);
  res.render("neighbourhood", {Data});
}


function show(req, res) {
    Neighbourhood.findById(req.params.id, function (err, neighbourhood) {
      res.render("/city/neighbourhoods", { neighbourhood });
    });
  }


module.exports = {
  index,
  show,
};