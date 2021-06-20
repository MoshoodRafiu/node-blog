const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class Post extends Model {

}

Post.init({
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
    },
    views: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'post'
});

Post.getPorpular = () => {
    return Post.findAll({
        order: [
            ['views', 'DESC'],
            ['createdAt', 'DESC']
        ],
        limit: 6
    });
}

module.exports = Post;