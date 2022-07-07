const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var scheduleSchema = new Schema({
  HEARING_DATE: String,
  DATE_SUBMITTED: String,
});

module.exports = mongoose.model("Schedule", scheduleSchema);
