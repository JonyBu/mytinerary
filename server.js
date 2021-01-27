require("./componentes_Bk/conexion/database");

const bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = express();
const path = require("path")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routerCity = require("./componentes_Bk/controladores/controladorCity");
const routerItinerary = require("./componentes_Bk/controladores/controladorItinerary");
const routerActivities = require("./componentes_Bk/controladores/controladorActivities");
const routerDetails = require("./componentes_Bk/controladores/controladorDetails");
const routerUser = require("./componentes_Bk/controladores/controladorUser");
const passport = require("./componentes_Bk/auth/passport");
const authApi = require("./componentes_BK/auth/authApi");

app.use(passport.initialize());
require("./componentes_Bk/auth/passport");

// app.use("/api", passport.authenticate("jwt",{session:false}),routerCity);
app.use("/api", routerCity);
app.use("/api", routerItinerary);
app.use("/api", routerActivities);
app.use("/api", routerDetails);
app.use("/api", routerUser);
app.use("/api", authApi);


if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("cliente/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "cliente", "build", "index.html"));
  });
}

const publicPath = path.join(__dirname,'..','public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

var port = process.env.PORT || "8080";

app.listen(port, () => {
  console.log("servidor escuchando puerto ", port);
});
