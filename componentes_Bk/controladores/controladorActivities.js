var express = require('express');
var router = express.Router();
var activitiesModel = require('../modelos/activitiesModel');

// router.get('/activities/:idItinerary',(req,res) =>{
//     let activityRequested = req.params.idItinerary;
//     activitiesModel.find({idItinerary:activityRequested})
//     .then(activities=>{
//             res.send(activities)
//         })
//         .catch(err => console.log(err));
// });

router.get('/activities',function(req,res){
    activitiesModel.find()
    .then(
        function (datos){
            return res.send(datos);
        }
    );
});

router.post('/activities', function (req, res){
    console.log(req.body);
    var newModel = new activitiesModel({
        comments: req.body.comments
    });
    newModel.save()
    .then(
        function (datos) {
            return res.send(datos)
        }
    )
})

module.exports=router


