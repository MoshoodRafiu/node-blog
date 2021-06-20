const faker = require('faker');
const Category = require('../models/category');
const User = require('../models/user');

const seedUsers = (val) => {
    let users = [];
    for(let i = 0; i < val; i++){
        users.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
        });
    }
    User.bulkCreate(users);
}

const seedCategories = (val) => {
    let categories = [];
    for(let i = 0; i < val; i++){
        categories.push({
            name: faker.random.word(),
            slug: faker.lorem.slug(),
            description: faker.lorem.paragraph()
        });
    }
    Category.bulkCreate(categories);
}

const seedBanner = (val) => {
    let categories = [];
    for(let i = 0; i < val; i++){
        categories.push({
            name: faker.random.word(),
            slug: faker.lorem.slug(),
            description: faker.lorem.paragraph()
        });
    }
    Category.bulkCreate(categories);
}

exports.run = async function(){
    await seedUsers(10);
    await seedCategories(10);
}