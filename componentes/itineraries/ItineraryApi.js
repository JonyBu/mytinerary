var express = require('express');
var app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
var itineraryModel = require('./itinerarySchema');

app.get('/app/itineraries', cors(), function (req, res) {
    itineraryModel.find()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/app/itineraries', cors(), function (req, res) {
    var newModel = new itineraryModel({
        title: req.body.title,
        profilePic: req.body.profilePic,
        rating: req.body.rating,
        duration: req.body.duration,
        cost: req.body.cost,
        hashtag: req.body.hashtag
    });
    newModel.save()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})

app.listen(8000, function () {
    console.log('servidor escucha el puerto 8000 desde itineraryApi')
});