const neighbourhoodData = require("../public/assets/Toronto Neighbourhoods.json")
JSON.stringify(neighbourhoodData);

function index(req, res) {
    res.render("index", { neighbourhoodData });
  };

module.exports = {
    index,
}