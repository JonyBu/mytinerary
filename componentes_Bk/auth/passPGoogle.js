const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

let QUOTE_SERVICE_URL =  `http://localhost:${
  process.env.PORT || "8080"
}/api/auth/google/callback`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/api/auth/google/callback`;
}

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "697470937881-pv4imaeqvvnj2lth7u9u6r449v0a3e4q.apps.googleusercontent.com",
      clientSecret: "wRyw3_9F8eRBKPunTUI0Samu",
      callbackURL: QUOTE_SERVICE_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      cb(null, profile);
    }
  )
);
