const mongoose = require('mongoose');
const User = require('../models/db');
const express = require("express");
// let User = mongoose.model('User');
let sendJsonResponce = function (res, status, content) {
    res.status(status);
    res.json(content);
}
const makeHomePage = function (req, res) {
    res.render('index',{title:"Главная"});

};
const reg =  function (req, res) {
  res.render('registration',{title:"Форма регистрации"});

};
const places = function (req, res) {
    res.render('places', {title:"Здесь нужно побывать!"});

};
const blog = function (req, res) {
    res.render('blog', {title:"Читать тоже интересно!"});
};
let createUser = function (req, res) {
    User.User.create({
        name: req.body.userName,
        sex: req.body.sex,
        country: req.body.country,
        password:req.body.password,
        age: req.body.age,
        email: req.body.email

    }, function (error, users) {
        if(error) {
            return sendJsonResponce(res, 400, error);
        } else {
           return sendJsonResponce(res,200, users)
        }
    });
};

module.exports = {
  makeHomePage,
    reg,
    places,
    blog,
    createUser
};