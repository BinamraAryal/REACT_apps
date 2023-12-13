const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT||5001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api',taskRoutes);
app.listen(PORT, ()=>{
    console.log('Server is running on port ${5001}');
});