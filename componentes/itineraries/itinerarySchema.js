let mongoose = require('mongoose');

let itinerarySchema = new mongoose.Schema({
    title: String,
    profilePic: String,
    rating: Number,
    duration: Number,
    cost: Number,
    hashtag: Array
})

module.exports = mongoose.model('itineraries', itinerarySchema)