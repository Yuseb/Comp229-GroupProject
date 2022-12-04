// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let product = require('../models/products');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Sports store',
    products: ''
   });
});

/* GET Log in page */
router.get('/login', (req, res, next) => {
  res.render('content/login', {
    title: 'SS-Log In',
    products: ''
   });
});

module.exports = router;
