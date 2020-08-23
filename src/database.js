const mongoose = require('mongoose');
const { config } = require('./config/index')

const DBCONNECT = config.dbConnect

// const DOCKER_MONGO = 'mongodb://mongo/redSocial'
const DOCKER_MONGO = process.env.DOCKER_MONGO

mongoose.connect(DOCKER_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.info('db is connected'))
    .catch(err => console.info(err));