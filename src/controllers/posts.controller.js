const {insertPost} = require('../models/posts.model');

function create(req, res){
    let body = req.body;
    insertPost(body);
    res.send('Postagem cadastrada');
}
module.exports = {create}