const {insertPost} = require('../models/posts.model');

function create(eq, res){
    let body = req.body;
    insertPost(body);
}
module.exports = (create)