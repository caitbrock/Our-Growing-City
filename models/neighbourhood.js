const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var neighbourhoodSchema = new Schema({
  AREA_NAME: String,
});

module.exports = mongoose.model("Neighbourhoods", neighbourhoodSchema);
