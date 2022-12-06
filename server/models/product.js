let mongoose = require('mongoose');

// create a model class
let productModel = mongoose.Schema({
    Product_Name: String,
    Description: String,
    Price: Number,
    Brand: String,
    Size: String
},
{
  collection: "products"
});

module.exports = mongoose.model('Product', productModel);