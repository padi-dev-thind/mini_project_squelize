const express = require('express');
const userManagementController = require('../Controller/userManagementController');
const router = express.Router();

//update user 
router.post('/update-user/:id',userManagementController.updateUser)
//create new user 
router.post('/create-user',userManagementController.creatUser)
//delete a user 
router.delete('/delete-user/:slug',userManagementController.deleteUser)
//hard-delete a user 
router.delete('/hard-delete-user/:slug',userManagementController.hardDeleteUser)
//show management page
router.get('/', userManagementController.manageUser)


module.exports = router

