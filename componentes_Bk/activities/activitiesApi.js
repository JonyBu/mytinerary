var express = require('express');
var router = express.Router();
var activitiesModel = require('./activitiesSchema');

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


