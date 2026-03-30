const express = require('express');
const routes = express.Router();
const {create} = require('../controllers/posts.controller');

routes.post('/post', create);
    

module.exports = routes;