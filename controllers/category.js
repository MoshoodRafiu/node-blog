module.exports = {
    show: (req, res) => {
        res.render('category', {
            category: req.params.slug,
            title: req.params.slug + ' Category',
            name: 'category'
        });
    }
}