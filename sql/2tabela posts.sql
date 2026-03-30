use twitter;

create table `posts` (
    id int auto_increment primary key,
    user_id int not null,
    conteudo varchar(255) not null
);