require('./componentes_Bk/conexion/database');

const bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cityApi = require("./componentes_Bk/cities/cityApi");
const itineraryApi = require("./componentes_Bk/itineraries/ItineraryApi");
const activitiesApi = require("./componentes_Bk/activities/activitiesApi");
const detailsApi = require('./componentes_Bk/details/detailsApi');
const routerUser = require('./componentes_Bk/controladores/controladorUser');
const passport = require('./componentes_Bk/auth/passport');

require('./componentes_Bk/auth/passport');

//app.use("/api",passport.authenticate("jwt",{session:false}),cityApi);
app.use("/api", cityApi);
app.use("/api",itineraryApi);
app.use("/api",activitiesApi);
app.use("/api",detailsApi);
app.use("/api",routerUser);

app.listen(8080,()=>{
    console.log("servidor escuchando puerto 8080")
})
