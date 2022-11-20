let mongoose = require('mongoose');

// create a model class
let books = mongoose.Schema({
    Product_Name: String,
    Description: String,
    Price: Number,
    Brand: String,
    Size: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', books);
