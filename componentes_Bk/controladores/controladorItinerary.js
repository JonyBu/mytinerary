var express = require("express");
var router = express.Router();
var itineraryModel = require("../modelos/itineraryModel");
const passport = require("../auth/passport");

let autenticate = passport.authenticate("jwt", { session: false });

router.get("/itineraries/:idCity", autenticate, (req, res) => {
  let itineraryRequested = req.params.idCity;
  itineraryModel
    .find({ idCity: itineraryRequested })
    .then((itineraries) => {
      res.send(itineraries);
    })
    .catch((err) => console.log(err));
});

router.post("/itineraries", function (req, res) {
  var newModel = new itineraryModel({
    title: req.body.title,
    profilePic: req.body.profilePic,
    rating: req.body.rating,
    duration: req.body.duration,
    cost: req.body.cost,
    hashtag: req.body.hashtag,
  });
  newModel.save().then(function (datos) {
    return res.send(datos);
  });
});
module.exports = router;
