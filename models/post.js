const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    coverImage: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Post;