const mongoose = require('mongoose');
const { config } = require('./config/index')

const DBCONNECT = config.dbConnect

mongoose.connect('mongodb://mongodata:27017/redSocial', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));