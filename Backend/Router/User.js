const express = require('express');
const { 
    getOne 
    } = require('../Controller/User');
const router = express.Router();


router.get('/getuser', getOne);

module.exports = router