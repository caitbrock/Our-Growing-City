const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var developmentSchema = new Schema({
  streetName: String,
  streetNum: Number,
  type: String,
  height: String,
  status: String,
  schedule: { type: Schema.Types.ObjectId, ref: "Schedule" },
  review: { type: Schema.Types.ObjectId, ref: "Review" },
});

module.exports = mongoose.model("Development Application", developmentSchema);
