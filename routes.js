const express = require('express')

const app = express.Router();

app.get('/', (req, res) => {
    res.json({
        anjas: 'ok'
    })
});

module.exports = app