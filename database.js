const mongoose = require('mongoose');

    mongoose.connect(`mongodb://localhost:27017/ejercicioPrueba`)
        .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })

module.exports = new Database()