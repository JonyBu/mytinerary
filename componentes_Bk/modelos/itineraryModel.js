let mongoose = require("mongoose");

let itinerarySchema = new mongoose.Schema({
  title: String,
  profilePic: String,
  rating: Number,
  quantityRating: Number,
  duration: Number,
  cost: Number,
  description: String,
  hashtag: Array,
  userPic: String,
  userName: String,
  countryName: String,
  idCity: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("itineraries", itinerarySchema);
