const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog-app', 'root', 'Olakunle27', {
    dialect: 'mysql', 
    host: 'localhost' 
});

module.exports = sequelize;