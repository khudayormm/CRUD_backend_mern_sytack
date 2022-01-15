const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

//MongoDB
require('./config/db');



//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', require('./routes/player'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`${PORT} is running...`)
});