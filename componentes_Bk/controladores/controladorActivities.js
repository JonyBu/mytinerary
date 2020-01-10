var express = require('express');
var router = express.Router();
var activitiesModel = require('../modelos/activitiesModel');

router.get('/activities', function (req, res) {
    activitiesModel.find()
        .then(
            function (datos) {
                return res.send(datos);
            }
        );
});

router.get('/activities/:idItinerary', function (req, res) {
    activitiesModel.find({ idItinerary: req.params.idItinerary })
        .then(
            function (datos) {
                return res.send(datos);
            },
        );
});

router.post('/activities', function (req, res) {
    var newModel = new activitiesModel({
        comments: req.body.comments,
        idItinerary: req.body.idItinerary
    });
    newModel.save()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})

router.delete('/activities/', function (req, res) {
    var newModel = new activitiesModel({
        _id: req.body._id
    })
    newModel.deleteOne()
        .then(
            function (datos) {
                return res.send(datos);
            }
        )
})

module.exports = router


