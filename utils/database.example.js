const Sequelize = require('sequelize');

const database = 'blog-app';
const username = 'root';
const password = '';
const host = 'localhost';

const sequelize = new Sequelize(database, username, password, {
    dialect: 'mysql',
    host
});

module.exports = sequelize;