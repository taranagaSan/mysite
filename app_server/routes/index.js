const express = require("express");
const router = express.Router();
const homePage = require('../controllers/controllers');
const ctrlReg = require('../controllers/controllers');
const ctrlPlaces = require('../controllers/controllers');
// const ctrlBloges = require('../controllers/controllers');
const ctrlRegOf = require('../controllers/controllers');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();


/* отдаем страницы*/
router.get('/', homePage.makeHomePage);
router.get('/registration', ctrlReg.reg);
// router.get('/blog', ctrlBloges.blog);
router.get('/places', ctrlPlaces.places);
router.post('/registration',jsonParser,ctrlRegOf.createUser);

module.exports = router;


