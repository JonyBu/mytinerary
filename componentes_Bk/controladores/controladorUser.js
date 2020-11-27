const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const usuarioModel = require("../modelos/usuarioModel");
const key = require("./secretKey");
const { check, validationResult } = require("express-validator");
const passport = require("../auth/passport");
const bcrypt = require("bcrypt");

router.get(
  "/user/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    usuarioModel
      .findOne({ _id: req.user.id })
      .then((user) => {
        res.json(user)
      })
      .catch((err) => res.status(404).json({ error: "User does not exist! "+err }));
  }
);

router.post("/user/login", async function (req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  const user = await usuarioModel.findOne({ userName: userName });
  if (!user)
    return res.status(400).json({ error: true, message: "no registrado" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: true, message: "no registrado" });


  const payload = {
    id: user._id,
    userName: user.userName,
  };

  const options = { expiresIn: 2592000 };

  jwt.sign(payload, key.secretOrKey, options, (err, token) => {
    if (err) {
      res.json({
        success: false,
        message: "Hubo un error",
        token: null,
      });
    } else {
      res.json({
        success: true,
        token: token,
      });
    }
  });
});

router.post(
  "/user/createAccount",
  [
    check("email").isEmail(),
    check("checkbox").not().isIn([false]),
    check("password").isLength({ min: 5 }),
  ],
  async function (req, res) {
    const errors = validationResult(req);
    var password = req.body.password;
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(password, salt);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    var newModel = new usuarioModel({
      profilePic: req.body.profilePic,
      userName: req.body.userName,
      password: hash,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      country: req.body.country,
      checkbox: req.body.checkbox,
    });
    newModel.save().then(function (datos) {
      console.log("datos: " + datos);
      return res.send(datos);
    });
  }
);

module.exports = router;
