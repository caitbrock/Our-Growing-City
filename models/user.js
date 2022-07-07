const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  admin: Boolean,
});

module.exports = mongoose.model("User", userSchema);