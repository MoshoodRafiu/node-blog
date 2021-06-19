const express = require('express');

const app = express();

app.use('/', (req, res) => {
    console.log(req);
});

app.listen(3000);