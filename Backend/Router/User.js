const express = require('express');
const validatePassword = require('../Middleware/Validation');
const { 
    getOne,
    postOne,
    putOne
    } = require('../Controller/User');
const router = express.Router();


router.get('/getuser', getOne);
router.post('/signup', validatePassword, postOne);
router.put('/updateuser', validatePassword, putOne);

module.exports = router;