const mongoose = require('mongoose');

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
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    sex: String,
    age: {type: Number, "default": 0, min:0, max: 100},
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

const Location = mongoose.model('location', locationSchema);
const User = mongoose.model('User', userSchema);