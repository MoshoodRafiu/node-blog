const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/web');
const association = require('./utils/association');
const seeder = require('./utils/seeder');
const helpers = require('./utils/helpers');
const date = require('date-and-time');

const app = express();
app.locals.helpers = helpers;
app.locals.date = date;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(routes);

const force = false;
association.syncDBWithAssociations(force)
    .then(result => {
        console.log(result)
        seeder.run(force);
        app.listen(3000);
    })
    .catch(err => console.log(err));