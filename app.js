const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/web');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(routes)

app.listen(3000);