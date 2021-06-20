const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class User extends Model{

}

User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName:'user'
});

module.exports = User;