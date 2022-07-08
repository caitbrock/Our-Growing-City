const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  admin: Boolean,
});

module.exports = mongoose.model("user", userSchema);
