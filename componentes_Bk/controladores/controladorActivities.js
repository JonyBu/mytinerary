var express = require("express");
var router = express.Router();
var activitiesModel = require("../modelos/activitiesModel");

router.get("/activities", function (req, res) {
  activitiesModel.find().then(function (datos) {
    return res.send(datos);
  });
});

router.get("/activities/:idItinerary", function (req, res) {
  activitiesModel
    .find({ idItinerary: req.params.idItinerary })
    .then(function (datos) {
      return res.send(datos);
    });
});

router.post("/activities", function (req, res) {
  console.log("req.body"+req.body)
  var newModel = new activitiesModel({
    comments: req.body.comments,
    userName: req.body.userName,
    userPic: req.body.userPic,
    like: req.body.like,
    deslike:req.body.deslike,
    date: req.body.date,
    idItinerary: req.body.idItinerary,
  });
  newModel.save().then(function (datos) {
    return res.send(datos);
  });
});

router.delete("/activities/", function (req, res) {
  var newModel = new activitiesModel({
    _id: req.body._id,
  });
  newModel.deleteOne().then(function (datos) {
    return res.send(datos);
  });
});

router.put("/activities/:_id", async (req, res) => {
  const id = req.params._id;
  const comments = req.body.data.comments;
  const date = req.body.data.date;
  if (id === req.body.data.id) {
    await activitiesModel
      .updateOne({ _id: id }, { $set: { comments: comments , date: date} })
      .then(() => {
        return res.status(200).json({
          message: "Update succesful ",
        });
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
