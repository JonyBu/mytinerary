let mongoose = require('mongoose');

let detailsSchema = new mongoose.Schema({
    title: String,
    activityPic: String,
    idItinerary:mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('details', detailsSchema)