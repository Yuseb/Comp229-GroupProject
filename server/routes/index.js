var express = require('express');
var router = express.Router();

let indexController = require("../controllers/index"); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});


/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* Get Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage );

/* Post Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* Get Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage );

/* Post Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* Get to perform User Logout */
router.get("/logout", indexController.performLogout);


module.exports = router;
