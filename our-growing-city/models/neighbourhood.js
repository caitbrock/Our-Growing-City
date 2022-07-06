const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var neighbourhoodSchema = new Schema({
  STREET_NAME: String,
  STREET_NUM: Number,
});

module.exports = mongoose.model("Neighbourhoods", neighbourhoodSchema);
