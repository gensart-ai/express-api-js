const express = require('express')

const app = express.Router();

app.get('/', (req, res) => {
    res.contentType('application/json').send({
        param: req.params
    })
});

module.exports = app