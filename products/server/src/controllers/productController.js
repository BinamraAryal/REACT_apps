const Product = require('../models/productModel');

//One of the controller function to handle the HTTP/HTTPs request coming from the Frontend
exports.getAllProducts = async (req,res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch (err){
        res.status(500).json({message: err.message});
    }
};
