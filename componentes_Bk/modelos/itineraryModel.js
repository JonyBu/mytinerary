let mongoose = require("mongoose");

let itinerarySchema = new mongoose.Schema({
  title: String,
  profilePic: String,
  rating: Number,
  duration: Number,
  cost: Number,
  hashtag: Array,
  idCity: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("itineraries", itinerarySchema);
