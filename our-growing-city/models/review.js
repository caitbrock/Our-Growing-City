const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Reviews", reviewSchema);
