let mongoose = require("mongoose");

let activitiesSchema = new mongoose.Schema({
  comments: String,
  userName: String,
  userPic: String,
  like: Number,
  dislike: Number,
  date: Number,
  idItinerary: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("activities", activitiesSchema);
