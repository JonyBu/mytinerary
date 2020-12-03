let mongoose = require("mongoose");
require("dotenv").config();

const server = `${process.env.USER}:${process.env.PASSWORD}@mytinerary-ehihp.mongodb.net`; // REPLACE WITH PROYECT DB SERVER
const database = `${process.env.DBNAME}?retryWrites=true&w=majority`; // REPLACE WITH PROYECT DB NAME
const MONGODB_URI = `mongodb+srv://${server}/${database}`
class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect( MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error: ", err);
      });
  }
}

module.exports = new Database();
