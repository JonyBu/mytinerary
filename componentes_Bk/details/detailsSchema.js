let mongoose = require('mongoose');

let detailsSchema = new mongoose.Schema({
    title: String,
    activityPic: String
});

module.exports = mongoose.model('details', detailsSchema)