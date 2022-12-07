const express = require('express');
const userManagementController = require('../Controller/userManagementController');
const router = express.Router();

//add new user 
router.get('/add-user',userManagementController.showAddUserPage)
//edit user page
router.get('/edit-user/:id',userManagementController.showEditUserPage)
//update user 
router.put('/update-user/:id',userManagementController.updateUser)
//create new user
router.get('/restore-user/:id',userManagementController.restoreUser)
//create new user  
router.post('/create-user',userManagementController.creatUser)
//delete a user 
router.delete('/delete-user/:id',userManagementController.deleteUser)
//soft-deleted user list 
router.get('/deleted-users',userManagementController.showDeletedUser)
//hard-delete a user 
router.delete('/hard-delete-user/:id',userManagementController.hardDeleteUser)
//show management page
router.get('/', userManagementController.manageUser)


module.exports = router
