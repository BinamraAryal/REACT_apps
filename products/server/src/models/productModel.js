const mongoose = require('mongoose');

//Creating product schema/model to retrive data in a certain format from the database
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


