let mongoose = require('mongoose');

// create a model class
let products = mongoose.Schema({
    Product_Name: String,
    Description: String,
    Price: Number,
    Brand: String,
    Size: String
},
{
  collection: "products"
});

module.exports = mongoose.model('products', products);
