const mongoose = require('mongoose');
const { config } = require('./config/index')

const DBCONNECT = config.dbConnect

const DOCKER_MONGO = 'mongodb://mongodata:27017/redSocial'

mongoose.connect(DBCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.info('db is connected'))
    .catch(err => console.info(err));