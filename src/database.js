const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));