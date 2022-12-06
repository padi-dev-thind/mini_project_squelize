const {Sequelize, DataTypes, where} = require('sequelize');
const user = require('../models/user');
const sequelize = require('../config/db').sequelize;
const User = require('../models/user')(sequelize, DataTypes)

class homeController{
    show(req,res,next){
        res.send('home page')
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
}

module.exports = new homeController()