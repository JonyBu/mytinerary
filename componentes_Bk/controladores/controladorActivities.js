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
  console.log("req.body" + req.body);
  var newModel = new activitiesModel({
    comments: req.body.comments,
    userName: req.body.userName,
    userPic: req.body.userPic,
    like: 0,
    dislike: 0,
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
  if (id === req.body.data.id) {
    await activitiesModel
      .updateOne(
        { _id: id },
        {
          $set: {
            comments: req.body.data.comments,
            date: req.body.data.date,
            like: req.body.data.like,
            dislike: req.body.data.dislike,
          },
        }
      )
      .then(() => {
        return res.status(200).json({
          message: "Update succesful ",
        });
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
