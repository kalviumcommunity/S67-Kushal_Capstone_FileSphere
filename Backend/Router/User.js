const express = require('express');
const validatePassword = require('../Middleware/Validation');
const { 
    getOne,
    postOne
    } = require('../Controller/User');
const router = express.Router();


router.get('/getuser', getOne);
router.post('/signup', validatePassword, postOne);

module.exports = router;