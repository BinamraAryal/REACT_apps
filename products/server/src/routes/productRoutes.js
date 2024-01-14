const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Define Routes
const getRoute = router.get('/products', productController);

module.exports = getRoute;