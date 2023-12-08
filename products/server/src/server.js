const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/dbConfig');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT||5000;

app.use(cors());//using CORS middlewares to solve cross origin errors

app.use(bodyParser.json());
app.use('/api', productRoutes);

app.listen(PORT,()=>{
    console.log('Server running on port ${PORT}');
});