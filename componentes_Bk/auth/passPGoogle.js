const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const usuarioModel = require('../modelos/usuarioModel');

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "697470937881-pv4imaeqvvnj2lth7u9u6r449v0a3e4q.apps.googleusercontent.com",
      clientSecret: "wRyw3_9F8eRBKPunTUI0Samu",
      callbackURL: `http://localhost:${
        process.env.PORT || "8080"
      }/api/auth/google/callback`,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      cb(null, profile);
    }
  )
);
