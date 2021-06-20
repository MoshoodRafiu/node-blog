const Category = require("../models/category");
const Post = require("../models/post");

module.exports = {
    index: async (req, res) => {
        const categories = await Category.findAll();
        const resultsPerPage = 9;
        const totalItem = await Post.count();
        const totalPages = Math.ceil(totalItem / resultsPerPage);
        let currentPage = req.query.page ? +req.query.page : 1;
        if (currentPage < 1) currentPage = 1;
        if (currentPage > totalPages) currentPage = totalPages;
        const posts = await Post.findAll({
            offset: resultsPerPage * (currentPage - 1),
            limit: resultsPerPage,
            include: ['category'],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        res.render('index', {
            title: 'Home',
            name: 'home',
            data: {
                categories,
                posts,
                pagination: {
                    totalItem,
                    totalPages,
                    resultsPerPage,
                    currentPage
                }
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