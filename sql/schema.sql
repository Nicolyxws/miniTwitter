use  minitwitter;
CREATE TABLE postagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    conteudo VARCHAR(280) NOT NULL, 
    data_postagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
CREATE TABLE curtidas (
    usuario_id INT NOT NULL,
    postagem_id INT NOT NULL,
    PRIMARY KEY (usuario_id, postagem_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (postagem_id) REFERENCES postagens(id) ON DELETE CASCADE
);

CREATE TABLE comentarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    postagem_id INT NOT NULL, curtidas
    usuario_id INT NOT NULL,  
    conteudo VARCHAR(280) NOT NULL,
    data_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY (postagem_id) REFERENCES postagens(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);