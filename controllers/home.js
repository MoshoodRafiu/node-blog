module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'Home',
            name: 'home'
        });
    },
    about: (req, res) => {
        res.render('about', {
            title: 'About Us',
            name: 'about'
        });
    },
    contact: (req, res) => {
        res.render('contact', {
            title: 'Contact Us',
            name: 'contact'
        });
    }
}