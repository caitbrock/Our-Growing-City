const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  img: {
    data: Buffer,
    contentType: String},
  content: String,
 },
 {
    timestamps: true,
  }
);

var developmentSchema = new Schema({
  STREET_NAME: String,
  STREET_NUM: Number,
  STREET_TYPE: String,
  APPLICATION_TYPE: String,
  APPLICATION_NUMBER: String,
  DESCRIPTION: String,
  STATUS: String,
  HEARING_DATE: String,
  DATE_SUBMITTED: String,
  review: [reviewSchema],
});

module.exports = mongoose.model("Developments", developmentSchema);
