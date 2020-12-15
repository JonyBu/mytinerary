let mongoose = require("mongoose");

let citySchema = new mongoose.Schema({
  name: String,
  country: String,
  itineraries: Boolean,
});

module.exports = mongoose.model("cities", citySchema);
