const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class Category extends Model{

}

Category.init({
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
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'category'
});

module.exports = Category;