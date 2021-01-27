const express = require("express");
const router = express.Router();
const passport = require("passport");
require("./passPGoogle");

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

let QUOTE_SERVICE_URL = `http://localhost:${process.env.PORT || "8080"}/login`;
let QUOTE_SERVICE_URL2 = `http://localhost:${process.env.PORT || "8080"}/`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/login`;
  QUOTE_SERVICE_URL2 = '/';
}

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: QUOTE_SERVICE_URL,
    session: false,
  }),
  function (req, res) {
    res.redirect(QUOTE_SERVICE_URL2);
  }
);

module.exports = router;
