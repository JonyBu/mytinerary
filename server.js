require('./componentes_Bk/conexion/database');

const bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routerCity = require("./componentes_Bk/controladores/controladorCity");
const routerItinerary = require("./componentes_Bk/controladores/controladorItinerary");
const routerActivities = require("./componentes_Bk/controladores/controladorActivities");
const routerDetails = require('./componentes_Bk/controladores/controladorDetails');
const routerUser = require('./componentes_Bk/controladores/controladorUser');
const passport = require('./componentes_Bk/auth/passport');

require('./componentes_Bk/auth/passport');

//app.use("/api",passport.authenticate("jwt",{session:false}),cityApi);
app.use("/api", require('./componentes_BK/auth/authApi'));//otra forma sin constante
app.use("/api", routerCity);
app.use("/api", routerItinerary);
app.use("/api", routerActivities);
app.use("/api", routerDetails);
app.use("/api", routerUser);

app.listen(8080,()=>{
    console.log("servidor escuchando puerto 8080")
})
