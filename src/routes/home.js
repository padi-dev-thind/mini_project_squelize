const express = require('express');
const homeController = require('../Controller/homeController');
const router = express.Router();


//show home page
router.get('/', homeController.show)

module.exports = router

