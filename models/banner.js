const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Banner = sequelize.define('banner', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Banner;