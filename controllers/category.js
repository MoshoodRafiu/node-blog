const Category = require("../models/category");
const helpers = require("../utils/helpers");

module.exports = {
    show: async (req, res) => {
        const category = await Category.findOne({ where: { slug: req.params.slug }});
        if (category) {
            const categories = await Category.findAll();
            res.render('category', {
                title: helpers.toCapitalize(category.name) + ' Category',
                name: 'category',
                data: {
                    category,
                    categories,
                    posts: await category.getPosts()
                }
            });
        }else{
            res.redirect('/')
        }
    }
}