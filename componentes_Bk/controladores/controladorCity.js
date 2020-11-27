var express = require("express");
var router = express.Router();
const passport = require("../auth/passport");

var cityModel = require("../modelos/cityModel");
let autenticate =  passport.authenticate("jwt", { session: false })

router.get(
  "/cities",
  autenticate,
  function (req, res) {
    cityModel
      .find()
      .then(function (datos) {
        return res.send(datos);
      })
      .catch((err) => {
        console.log("error controladorcity: "+err)
      });
  }
);


router.get("/cities/:name", (req, res) => {
  let cityRequested = req.params.name;
  cityModel
    .findOne({ name: cityRequested })
    .then((city) => {
      res.send(city);
    })
    .catch((err) => console.log(err));
});

router.post("/cities", function (req, res) {
  var newModel = new cityModel({
    name: req.body.name,
    country: req.body.country,
  });
  newModel.save().then(function (datos) {
    return res.send(datos);
  });
});

module.exports = router;
