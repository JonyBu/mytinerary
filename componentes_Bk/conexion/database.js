let mongoose = require('mongoose');

const server = 'mytinerary:mytinerarypass@mytinerary-ehihp.mongodb.net'; // REPLACE WITH PROYECT DB SERVER
const database = 'MYtinerary?retryWrites=true&w=majority';      // REPLACE WITH PROYECT DB NAME

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb+srv://${server}/${database}`,{ useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()