const express = require('express');
const cors    = require('cors');
const app = express()

app.use(express.json());
app.use(cors());

//importação de rotas do modulos
const postsRoutes = require('./routes/posts.routes');

//inclusão de rotas dos modulos na aplicação
app.use(postsRoutes);

module.exports = app;