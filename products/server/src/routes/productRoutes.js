const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Define Routes
router.get('/products', productController.getAllProducts);

module.exports = router;