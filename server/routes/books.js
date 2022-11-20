// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let books = require('../models/books');

/* GET Product Page page. READ */
router.get('/', (req, res, next) => {
  // find all Product in the Product collection
  books.find((err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
  res.render('books/details', {
    title: 'Add Book',
    books: ''
  });
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
  let newBook = books({
    "Product_Name": req.body.Product_Name,
    "Description": req.body.Description,
    "Price": req.body.Price,
    "Brand": req.body.Brand,
    "Size": req.body.Size
  });

  books.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      // Refresh booklist
      res.redirect('/books');
    }
  });
});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  books.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      //Show the edit page
      res.render('books/details', { title: 'Edit Book', books: bookToEdit })
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
  let id = req.params.id

  let updatedBook = books({
    "_id": id,
    "Product_Name": req.body.Product_Name,
    "Description": req.body.Description,
    "Price": req.body.Price,
    "Brand": req.body.Brand,
    "Size": req.body.Size
  });

  books.updateOne({ _id: id }, updatedBook, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      // Refresh booklist
      res.redirect('/books');
    }
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  let _id = req.params.id;

  books.remove({ _id: _id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      // Refresh booklist
      res.redirect('/books');
    }
  });
});

module.exports = router;