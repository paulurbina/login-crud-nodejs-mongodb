const mongoose = require('mongoose');
const { config } = require('./config/index')

const { dockerMongo, dbConnect } = config

mongoose.connect(dockerMongo || dbConnect , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.info('db is connected'))
    .catch(err => console.info(err));