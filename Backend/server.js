const express = require('express');
require('dotenv').config();
const connectDB = require('./Database/db');
const router = require('./Router/User');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;  
connectDB();


app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    