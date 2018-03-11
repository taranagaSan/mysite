const express = require("express");
const router = express.Router();
const homePage = require('../controllers/main');
const ctrlReg = require('../controllers/main');
const ctrlPlaces = require('../controllers/main');
const ctrlBloges = require('../controllers/main');

/* отдаем страницы*/
router.get('/', homePage.makeHomePage);
router.get('/registration', ctrlReg.reg);
router.get('/places', ctrlPlaces.places);
router.get('/blog', ctrlBloges.blog);
module.exports = router;


