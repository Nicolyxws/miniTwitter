const db = require('../config/db');

function insertPost(body){
    let {user_id, conteudo} = body;
    
    let sql = `insert into posts (user_id, descricao) values (?, ?)`;
    const [result] = db.query
    sql,
    []
}

module.exports = {insertPost}