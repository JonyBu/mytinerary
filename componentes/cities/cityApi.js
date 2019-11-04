var express = require('express');
var app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
var cityModel = require('./citySchema');

app.get('/app/cities', cors(), function (req, res) {
    cityModel.find()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/app/cities', cors(), function (req, res) {
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

app.listen(8080, function () {
    console.log('servidor escucha el puerto 8080')
});