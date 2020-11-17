let mongoose = require("mongoose");

let activitiesSchema = new mongoose.Schema({
  comments: String,
  idItinerary: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("activities", activitiesSchema);
