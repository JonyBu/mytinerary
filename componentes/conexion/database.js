let mongoose = require('mongoose');

const server = 'jonathan:48570487@mytinerary-ehihp.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const database = 'MYtinerary?retryWrites=true&w=majority';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb+srv://${server}/${database}`,{ useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()