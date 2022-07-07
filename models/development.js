const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

var developmentSchema = new Schema({
  STREET_NAME: String,
  STREET_NUM: Number,
  STREET_TYPE: String,
  APPLICATION_TYPE: String,
  APPLICATION_NUMBER: String,
  DESCRIPTION: String,
  STATUS: String,
  schedule: { type: Schema.Types.ObjectId, ref: "Schedule" },
  review: [reviewSchema],
});



module.exports = mongoose.model("Developments", developmentSchema);
