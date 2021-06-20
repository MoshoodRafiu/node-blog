const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/web');
const association = require('./utils/association');
const seeder = require('./utils/seeder');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(routes);

association.syncDBWithAssociations(true)
    .then(result => {
        console.log(result)
        seeder.run();
    })
    .catch(err => console.log(err));

app.listen(3000);