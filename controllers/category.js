module.exports = {
    show: (req, res) => {
        res.render('category', {
            category: req.params.slug
        });
    }
}