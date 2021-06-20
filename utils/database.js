const Sequelize = require('sequelize');

// const database = 'blog-app';
// const username = 'root';
// const password = 'Olakunle27';
// const host = 'localhost';

const database = 'heroku_00c535f87798618';
const username = 'b0b3f691c9f1f3';
const password = 'be65067f';
const host = 'us-cdbr-east-04.cleardb.com';

const sequelize = new Sequelize(database, username, password, {
    dialect: 'mysql',
    host
});

module.exports = sequelize;