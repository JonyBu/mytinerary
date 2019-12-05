var express = require('express');
var router = express.Router();
var detailModel = require('../modelos/detailsModel');

router.get('/details', function (req, res){
    detailModel.find()
    .then(
        function (datos) {
            return res.send(datos)
        }
    )
})

router.get('/details/:itineraryId', function (req, res){
    detailModel.find({idItinerary:req.params.itineraryId})
    .then(
        function (datos) {
            return res.send(datos)
        }
    )
})

router.post('/details', function (req, res){
    console.log(req.body);
    var newModel = new detailModel({
        title: req.body.title,
        activityPic: req.body.activityPic
    });
    newModel.save()
    .then(
        function(datos){
            return res.send(datos)
        }
    )
})

module.exports=router