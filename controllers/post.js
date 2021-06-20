const Post = require("../models/post");
const Category = require("../models/category");

module.exports = {
    show: async (req, res) => {
        const categories = await Category.findAll();
        const post = await Post.findOne({
            where: { slug: req.params.slug },
            include: ['category']
        });
        if (post){
            res.render('post-details', {
                title: post.title,
                name: 'home',
                data: {
                    categories,
                    post,
                    posts: {
                        next: await Post.next(post.id),
                        prev: await Post.prev(post.id),
                        porpular: await Post.getPorpular()
                    },
                }
            });
        }else{
            res.redirect('/404');
        }
    }
}