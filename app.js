const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/web');
const association = require('./utils/association');
const seeder = require('./utils/seeder');
const helpers = require('./utils/helpers');
const date = require('date-and-time');
const Post = require('./models/post');
const Category = require('./models/category');

const app = express();
app.locals.helpers = helpers;
app.locals.date = date;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(routes);
app.use('/', (req, res) => {
    let fetchedCategories;
    Category.findAll()
        .then(categories => {
            fetchedCategories = categories;
            return Post.getPorpular()
        })
        .then(posts => {
            res.render('404', {
                title: 'Page Not Found',
                name: '404',
                data: {
                    categories: fetchedCategories,
                    posts: {
                        porpular: posts
                    },
                }
            });
        })
        .catch(err => console.log(err));
});

const force = false;
association.syncDBWithAssociations(force)
    .then(result => {
        console.log(result)
        seeder.run(force);
        app.listen(3000);
    })
    .catch(err => console.log(err));