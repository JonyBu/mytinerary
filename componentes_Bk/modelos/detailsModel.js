let mongoose = require('mongoose');

let detailsSchema = new mongoose.Schema({
    title: String,
    activityPic: String,
    idActivity:mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('details', detailsSchema)