const faker = require('faker');
const Category = require('../models/category');
const Post = require('../models/post');
const User = require('../models/user');
const sequelize = require('./database');

const seedUsers = async (val) => {
    let users = [];
    for(let i = 0; i < val; i++){
        users.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
        });
    }
    await User.bulkCreate(users);
}

const seedCategories = async (val) => {
    let categories = [];
    for(let i = 0; i < val; i++){
        categories.push({
            name: faker.random.word(),
            slug: faker.lorem.slug(),
            description: faker.lorem.paragraph()
        });
    }
    await Category.bulkCreate(categories);
}

const seedPosts = async (val) => {
    let posts = [];
    let user, category;
    for(let i = 0; i < val; i++){
        user = await User.findOne({ order: sequelize.random() });
        category = await Category.findOne({ order: sequelize.random() });
        posts.push({
            title: faker.random.words(),
            body: faker.lorem.text(),
            coverImage: faker.image.image(),
            userId: user.id,
            categoryId: category.id
        });
    }
    await Post.bulkCreate(posts);
}

exports.run = async function(force = false){
    const users = await User.findAll();
    const categories = await Category.findAll();
    const posts = await Post.findAll();
    if (users.length === 0 || force)
        await seedUsers(10);
    if (categories.length === 0 || force)
        await seedCategories(10);
    if (posts.length === 0 || force)
        await seedPosts(100);
}