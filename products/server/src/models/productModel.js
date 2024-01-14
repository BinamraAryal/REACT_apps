const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    picture: String,
    description: String,
    company: String,
    price: String,
    category: String,
    name:String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


