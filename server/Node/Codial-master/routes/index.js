const express = require('express');
const router = express.Router();
const homecontroller = require('../contrtoller/homeController');

router.get('/',homecontroller.home);
router.use('/users', require('./user'));

module.exports = router;