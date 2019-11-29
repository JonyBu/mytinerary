var express = require('express');
var router = express.Router();

var cityModel = require('../modelos/cityModel');

router.get('/cities', function (req, res) {
    cityModel.find()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})

router.get('/cities/:name', (req,res)=>{
    let cityRequested = req.params.name;
    cityModel.findOne({name:cityRequested})
    .then(city=>{
        res.send(city)
    })
    .catch(err => console.log(err));
});

// router.get('/cities/:name', function (req, res) {
//     res.send('Ciudad ' + req.params.name);
// });

router.post('/cities', function (req, res) {
    var newModel = new cityModel({
        name: req.body.name,
        country: req.body.country
    });
    newModel.save()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})

module.exports = router