const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

//importação de rotas do modulos
const postsRoutes = require('./routes/posts.routes');

//inclusão das rotas
app.use(postsRoutes);

module.exports = app;