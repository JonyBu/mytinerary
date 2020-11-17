let mongoose = require("mongoose");

let citySchema = new mongoose.Schema({
  name: String,
  country: String,
});

module.exports = mongoose.model("cities", citySchema);
