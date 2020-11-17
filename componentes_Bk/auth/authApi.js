const express = require("express");
const router = express.Router();
const passport = require("passport");
require("./passPGoogle");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
    session: false,
  }),
  function (req, res) {
    res.redirect("http://localhost:3000/");
  }
);

module.exports = router;
