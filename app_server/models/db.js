const mongoose = require('mongoose');
// require('../routes/index');
// require('../controllers/controllers');

mongoose.connect("mongodb://localhost:27017/mysitedb");

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to mysitedb');
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connetion error:' + err);
});
mongoose.connection.on('disconnect', function () {
    console.log('Mongoose disconnected');
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true,"usernameRequired"],
        // maxLength:[16,"tooLong"],
        // minLength:[2,"tooShort"],
        // match:[/^[a-z0-9]+$/,"usernameIncorrect"]
    },
    // email: {
    //     type: String,
    //    },
    // password: {
    //     type: String,
        // maxLength:[32,"tooLong"],
        // minLength:[6,"tooShort"],
        // match:[/^[A-Za-z0-9]+$/,"passwordIncorrect"],
        // },
    sex: String,
    // age: {type: Number, "default": 0, min:0, max: 100},
    country: [String]
});

const reviewSchema = new mongoose.Schema({
    author: String,
    createdOn: {type: Date, default: Date.now},
    reviewText: String
});
const locationSchema = new mongoose.Schema({
   name: String,
   location:String,
   reviews: [reviewSchema]
});

// const Location = mongoose.model('location', locationSchema);
module.exports.User = mongoose.model('User', userSchema);




