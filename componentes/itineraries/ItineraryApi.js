var express = require('express');
var router = express.Router();

var itineraryModel = require('./itinerarySchema');

router.get('/itineraries', function (req, res) {
    itineraryModel.find()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})

router.put('/itineraries/:id', function(req,res){
    updateModel.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(function(){
        updateModel.findOne({_id:req.params.id}).then(function(datos){
            res.send(datos);
        })
    })
})

router.post('/itineraries', function (req, res) {
    console.log(req.body);
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