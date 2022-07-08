const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  admin: Boolean,
});

const reviewSchema = new Schema({
  content: String,
  img:     
  {
    data: Buffer,
    contentType: String
}, 
  user: [userSchema],
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
