const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', (req, res) => {
    console.log(req);
});

app.listen(3000);