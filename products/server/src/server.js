const db = require('./config/dbConfig');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 5000;

app.use(cors());//using CORS middlewares to solve cross origin errors

app.use(bodyParser.json());//parse the incoming request in json format

app.use('/api', productRoutes);//GET endpoint for the api

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
