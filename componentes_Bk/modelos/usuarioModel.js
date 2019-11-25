const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName:String,
    password:String,
    email:String,
    profilePic:String,
    firsName: String,
    lastName: String,
    country: String
})

module.exports = mongoose.model('User', userSchema);