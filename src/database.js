const mongoose = require('mongoose');
const { config } = require('./config/index')

const { dbConnect, dockerMongo } = config

// const DOCKER_MONGO = 'mongodb://mongo/redSocial'
// const DOCKER_MONGO = process.env.DOCKER_MONGO

mongoose.connect(dbConnect || dockerMongo , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.info('db is connected'))
    .catch(err => console.info(err));