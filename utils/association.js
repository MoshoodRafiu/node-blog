const sequelize = require('./database');
const User = require('../models/user');
const Post = require('../models/post');
const Category = require('../models/category');

exports.syncDBWithAssociations = (force) => {
    User.hasMany(Post);
    Post.belongsTo(User);
    Category.hasMany(Post);
    Post.belongsTo(Category);

    return sequelize.sync({ force })
}