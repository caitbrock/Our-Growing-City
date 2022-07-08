const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  admin: Boolean,
});

const reviewSchema = new Schema({
  content: String,
  user: [userSchema],
});


module.exports = mongoose.model("Reviews", reviewSchema);
