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

router.get('/itineraries/:_id', (req,res)=>{
    let itineraryRequested = req.params._id;
    itineraryModel.findById({_id:itineraryRequested})
    .then(itinerary=>{
        res.send(itinerary)
    })
    .catch(err => console.log(err));
});

router.put('/itineraries/:_id', function(req,res){
    itineraryModel.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(function(){
        itineraryModel.findOne({_id:req.params.id}).then(function(datos){
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