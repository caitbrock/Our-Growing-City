const Neighbourhood = require("../models/neighbourhood.js");
const Data = require("../public/assets/Development Applications Data.json");
const Data2 = require("..public/assets/ACTIVE - North Toronto - Neighbourhood 173.geojson")
JSON.stringify(Data);
JSON.stringify(Data2);


function index(req, res) {
  
  console.log(Data2);
  // Neighbourhood.find({}, function (err, developments) {
    res.render("neighbourhood", {Data2});
    
  // });
}

function show(req, res) {
    Neighbourhood.findById(req.params.id, function (err, neighbourhood) {
      res.render("/index", { neighbourhood });
    });
  }



module.exports = {
  index,
  show,
};