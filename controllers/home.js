const { Op } = require("sequelize");
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
                posts: {
                    all: posts,
                    porpular: await Post.getPorpular()
                },
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
                categories,
                posts: {
                    porpular: await Post.getPorpular()
                },
            }
        });
    },
    contact: async (req, res) => {
        const categories = await Category.findAll();
        res.render('contact', {
            title: 'Contact Us',
            name: 'contact',
            data: {
                categories,
                posts: {
                    porpular: await Post.getPorpular()
                },
            }
        });
    },
    search: async (req, res) => {
        const value = req.query.value;
        if (!value){
            res.redirect('/');
        }
        const categories = await Category.findAll();
        const resultsPerPage = 9;
        const totalItem = await Post.count({
            where: {title: { [Op.substring]: value }}
        });
        const totalPages = Math.ceil(totalItem / resultsPerPage);
        let currentPage = req.query.page ? +req.query.page : 1;
        if (currentPage < 1) currentPage = 1;
        if (currentPage > totalPages) currentPage = totalPages;
        console.log(currentPage);
        const posts = await Post.findAll({
            where: {title: { [Op.substring]: value }},
            include: ['category']
        });
        res.render('index', {
            title: 'Home',
            name: 'home',
            data: {
                categories,
                posts: {
                    all: posts,
                    porpular: await Post.getPorpular()
                },
                pagination: {
                    totalItem,
                    totalPages,
                    resultsPerPage,
                    currentPage
                }
            }
        });
    }
}