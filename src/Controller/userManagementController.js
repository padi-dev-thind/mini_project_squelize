const {Sequelize, DataTypes, where} = require('sequelize');
const user = require('../models/user');
const sequelize = require('../config/db').sequelize;
const User = require('../models/user')(sequelize, DataTypes)

class userManagementController{
    show(req,res,next){
        res.send('user mannagement page')
    }
    
    //path /user-management
    async manageUser(req,res,next){
        const users = await User.findAll({ raw : true})
        res.render('userManagementPage',{users: users})
    }

    //create new user
    //path /create-user
    async creatUser(req,res,next){
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const email = req.body.eamil
        const rawPassword = req.body.password

        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: rawPassword,
            createdAt: new Date(),
            updatedAt: new Date()
          });
    }

    //update user's infor
    //path /update-user/:id
    async updateUser(req,res,next){
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const email = req.body.eamil
        const rawPassword = req.body.password

        await User.update({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: rawPassword,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {where: {
            id: req.id,
          }
        });
    }

    //soft delete
    //path /delete-user/:slug
    async deleteUser(req,res,next){
        const id = req.params.slug
        await User.destroy({
            where: {
            id: id
            }
        });
    }

    //hard delete
    //path /hard-delete-user/:slug
    async hardDeleteUser(req,res,next){
        const id = req.params.slug
        await User.destroy({
            where: {
            id: id
            }
            , force: true
        });
    }

    //restore user 
    //path /restore-user/:slug
    async restoreUser(req,res,next){
        const id = req.params.slug
        await User.restore({
            where: {
            id: id
            }
        });
    }

    //soft-deleted user list 
    //path /soft-deleted-user
    async softDeletedUserList(req,res,next){
        const id = req.params.slug
        const deletedUser = await User.findAll({
            where: {
            deletaAT: {
                [Op.not]: null,
            }
            }
        });
    }

}

module.exports = new userManagementController()
