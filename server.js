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

app.use("/api",cityApi);
app.use("/api",itineraryApi);

app.listen(8080,()=>{
    console.log("servidor escuchando puerto 8080")
})
