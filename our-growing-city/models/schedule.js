const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var scheduleSchema = new Schema({
  date: Date,
  location: String,
});

module.exports = mongoose.model("Schedule", scheduleSchema);
