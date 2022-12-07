const {Sequelize, DataTypes, where} = require('sequelize');
const user = require('../models/user');
const sequelize = require('../config/db').sequelize;
const User = require('../models/user')(sequelize, DataTypes)

class homeController{
    show(req,res,next){
        res.send('home page')
    }
}

module.exports = new homeController()
