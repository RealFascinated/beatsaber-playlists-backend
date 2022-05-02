import express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
    res.json({
        error: false,
        message: 'Welcome to the API'
    });
});

export = Router;