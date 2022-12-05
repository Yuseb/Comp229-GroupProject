// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let users = []
// define the game model
let product = require('../models/products');

router.use(express.urlencoded({ extended: false }))
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

router.post('/login', (req, res, next) => {

});

/* GET Sign up page */
router.get('/signup', (req, res, next) => {
  res.render('content/signup', {
    title: 'SS-Sign up',
    products: ''
   });
});


router.post('/signup', async (req, res, next) => {
  try {
    let hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/signup')
  }
  console.log(users)
});

router.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

router.use(function (req, res, next) {
  global.currentUser = req.user;
  next();
});

module.exports = router;
