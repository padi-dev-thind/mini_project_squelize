const express = require('express');
const homeController = require('../Controller/homeController');
const router = express.Router();

//update user 
router.post('/update-user/:id',homeController.updateUser)
//create new user 
router.post('/create-user',homeController.creatUser)
//delete a user 
router.delete('/delete-user/:slug',homeController.deleteUser)
//show management page
router.get('/user-management', homeController.manageUser)
router.get('/', homeController.show)

module.exports = router

