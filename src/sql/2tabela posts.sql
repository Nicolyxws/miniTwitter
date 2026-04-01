use twitter;

create table `posts` (
    id int auto_increment primary key,
    user_id int not null,
    conteudo varchar(255) not null
);

create table `midias` (
    id int auto_increment primary key,
    post_id int not null,
    url varchar(255) not null,

    constraint fk_midias_posts 
    foreign key (post_id)
     references posts(id)
     on delete cascade
     on update cascade
);