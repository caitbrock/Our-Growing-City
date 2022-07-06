const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var developmentSchema = new Schema({
  STREET_NAME: String,
  STREET_NUM: Number,
  APPLICATION_TYPE: String,
  DESCRIPTION: String,
  STATUS: String,
  schedule: { type: Schema.Types.ObjectId, ref: "Schedule" },
  review: { type: Schema.Types.ObjectId, ref: "Review" },
});

module.exports = mongoose.model("Developments", developmentSchema);
