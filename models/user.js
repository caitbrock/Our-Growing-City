const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  avatar: {
    type: String,
    default: "",
    required: false,
  },
  admin: {
    type: Boolean,
    required : true,
    default: false
},
});

module.exports = mongoose.model("user", userSchema);
