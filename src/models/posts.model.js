const db = require('../config/db');

function insertPost(body){
    let {user_id, conteudo} = body;
    
    let sql = `insert into posts (user_id, conteudo) values (?, ?)`;
    const [result] = db.query
    sql,
    [user_id, conteudo]
}

module.exports = {insertPost}