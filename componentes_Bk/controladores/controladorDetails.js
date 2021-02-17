var express = require("express");
var router = express.Router();
var detailModel = require("../modelos/detailsModel");

const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  size: 500000,
  destination: path.join(__dirname, "../../cliente/src/imagenes/detalles"),
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".")
    const name = req.body.title.replace(/\s+/g, '')
    cb(null, `${name}.${ext[1]}`);
  }
});

const upload = multer({ storage }).single("activityPic");

router.get("/details", function (req, res) {
  detailModel.find().then(function (datos) {
    return res.send(datos);
  });
});

router.get("/details/:itineraryId", function (req, res) {
  detailModel
    .find({ idItinerary: req.params.itineraryId })
    .then(function (datos) {
      return res.send(datos);
    });
});

router.post("/details", upload ,function (req, res) {
  console.log(req.body);
  var newModel = new detailModel({
    title: req.body.title,
    activityPic: req.file.filename,
    details: req.body.details,
    idItinerary: req.body.idItinerary
  });
  newModel.save().then(function (datos) {
    return res.send(datos);
  });
});

module.exports = router;
