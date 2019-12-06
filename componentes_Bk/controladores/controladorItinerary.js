var express = require('express');
var router = express.Router();
var itineraryModel = require('../modelos/itineraryModel');

router.get('/itineraries', function (req, res) {
    itineraryModel.find()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})

router.get('/itineraries/:idCity', (req,res)=>{
    let itineraryRequested = req.params.idCity;
    itineraryModel.find({idCity:itineraryRequested})
    .then(itineraries=>{
        res.send(itineraries)
    })
    .catch(err => console.log(err));
});


router.post('/itineraries', function (req, res) {
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
module.exports=router