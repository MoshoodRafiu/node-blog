const Category = require("../models/category");
const Post = require("../models/post");

module.exports = {
    index: async (req, res) => {
        const categories = await Category.findAll();
        const posts = await Post.findAll({ include: ['category'] });
        res.render('index', {
            title: 'Home',
            name: 'home',
            data: {
                categories,
                posts
            }
        });
    },
    about: async (req, res) => {
        const categories = await Category.findAll();
        res.render('about', {
            title: 'About Us',
            name: 'about',
            data: {
                categories
            }
        });
    },
    contact: async (req, res) => {
        const categories = await Category.findAll();
        res.render('contact', {
            title: 'Contact Us',
            name: 'contact',
            data: {
                categories
            }
        });
    }
}