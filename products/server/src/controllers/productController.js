const Product = require('../models/productModel');
//GET
const GET = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch (err){
        res.status(500).json({message: `Error encountered: ${err.message}`});
    }
};

module.exports = GET;