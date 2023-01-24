const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

// /Users/almoggutin/mongodb/bin/mongod --dbpath=/Users/almoggutin/mongodb-data
