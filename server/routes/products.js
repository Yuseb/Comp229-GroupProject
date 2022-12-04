// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the Product model
let products = require('../models/products');

/* GET Product Page page. READ */
router.get('/', (req, res, next) => {
  // find all Product in the Product collection
  products.find((err, products) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('products/index', {
        title: 'SS-Products',
        products: products
      });
    }
  });

});

//  GET the Product Details page in order to add a new product
router.get('/add', (req, res, next) => {
  res.render('products/details', {
    title: 'Add Product',
    products: ''
  });
});

// POST process the Product Details page and create a new Product - CREATE
router.post('/add', (req, res, next) => {
  let newProduct = products({
    "Product_Name": req.body.Product_Name,
    "Description": req.body.Description,
    "Price": req.body.Price,
    "Brand": req.body.Brand,
    "Size": req.body.Size
  });

  products.create(newProduct, (err, Product) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      // Refresh Productlist
      res.redirect('/products');
    }
  });
});

// GET the Product Details page in order to edit an existing Product
router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  products.findById(id, (err, productToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      //Show the edit page
      res.render('products/details', { title: 'Edit Product', products: productToEdit })
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
  let id = req.params.id

  let updatedProduct = products({
    "_id": id,
    "Product_Name": req.body.Product_Name,
    "Description": req.body.Description,
    "Price": req.body.Price,
    "Brand": req.body.Brand,
    "Size": req.body.Size
  });

  products.updateOne({ _id: id }, updatedProduct, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      // Refresh Productlist
      res.redirect('/products');
    }
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  let _id = req.params.id;

  products.remove({ _id: _id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      // Refresh Productlist
      res.redirect('/products');
    }
  });
});

module.exports = router;