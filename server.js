require("./componentes_Bk/conexion/database");
require("./componentes_Bk/auth/passport");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

var cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 8080;

const path = require("path")

app.use(express.static(path.join(__dirname, 'cliente/build')));

const routerCity = require("./componentes_Bk/controladores/controladorCity");
const routerItinerary = require("./componentes_Bk/controladores/controladorItinerary");
const routerActivities = require("./componentes_Bk/controladores/controladorActivities");
const routerDetails = require("./componentes_Bk/controladores/controladorDetails");
const routerUser = require("./componentes_Bk/controladores/controladorUser");
const passport = require("./componentes_Bk/auth/passport")
const authApi = require("./componentes_Bk/auth/authApi")

app.use(passport.initialize());

// app.use("/api", passport.authenticate("jwt",{session:false}),routerCity);
app.use("/api", authApi);
app.use("/api", routerCity);
app.use("/api", routerItinerary);
app.use("/api", routerActivities);
app.use("/api", routerDetails);
app.use("/api", routerUser);


if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("cliente/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "cliente", "build", "index.html"));
  });
}

// const publicPath = path.join(__dirname,'..','public');
// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });


let server = app.listen(port, () => {
  console.log("servidor escuchando puerto ", port);
});

server.on('clientError', (err, socket) => {
  console.error(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});