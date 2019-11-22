let mongoose = require('mongoose');

let activitiesSchema = new mongoose.Schema({
    comments: String
});

module.exports = mongoose.model('activities', activitiesSchema)