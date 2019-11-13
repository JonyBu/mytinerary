const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({

    rating: Number,
    duration: Number,
    cost: Number,
    hashtag: String

})

module.exports = mongoose.model('itineraries', itinerarySchema);