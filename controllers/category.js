const Category = require("../models/category");
const helpers = require("../utils/helpers");

module.exports = {
    show: async (req, res) => {
        const category = await Category.findOne({ where: { slug: req.params.slug }});
        if (category) {
            const categories = await Category.findAll();
            const resultsPerPage = 9;
            const totalItem = await category.countPosts();
            const totalPages = Math.ceil(totalItem / resultsPerPage);
            let currentPage = req.query.page ? +req.query.page : 1;
            if (currentPage < 1) currentPage = 1;
            if (currentPage > totalPages) currentPage = totalPages;
            const posts = await category.getPosts({
                offset: resultsPerPage * (currentPage - 1),
                limit: resultsPerPage,
                include: ['category'],
                order: [
                    ['createdAt', 'DESC']
                ]
            });
            res.render('category', {
                title: helpers.toCapitalize(category.name) + ' Category',
                name: 'category',
                data: {
                    category,
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
        }else{
            res.redirect('/')
        }
    }
}