const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var neighbourhoodSchema = new Schema({
  city: String,
  name: String,
  address: String,
});

module.exports = mongoose.model("Neighbourhood", neighbourhoodSchema);
