const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/web');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(routes)

app.listen(3000);