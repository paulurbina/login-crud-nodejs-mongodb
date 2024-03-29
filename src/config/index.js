require('dotenv').config()

config = {
    dev: process.env.NODE_ENV !== 'production',
    dbConnect: process.env.DB_CONNECT,
    dockerMongo: process.env.MONGO_URL  
}

module.exports = { config }