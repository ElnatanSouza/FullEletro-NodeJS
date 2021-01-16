create database fulleletro
default character set utf8
default collate utf8_general_ci;

create table comentarios (

id int AUTO_INCREMENT,
nome varchar(60) NOT null,
email varchar(30) NOT null,
msg varchar(300),
dia datetime DEFAULT now(),
PRIMARY KEY (id)

) default charset = utf8;

create table produtos (

id_produto int not null primary key auto_increment,
id_categoria int not null,
categoria varchar(60) not null,
descricao_produto varchar(200) not null,
preco_real char(20) not null,
preco_desc char(20) not null,
imagem varchar(200) not null unique,
marca varchar(20) not null

) default charset = utf8;

create table categorias (

id_categoria int not null primary key AUTO_INCREMENT,
categoria varchar(60) not null

) default charset = utf8;

ALTER TABLE produtos ADD CONSTRAINT FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria)

insert into categorias values 
        (default, 'Geladeira'),
        (default, 'Fogão'),
        (default, 'Microondas'),
        (default, 'Lava Roupas'),
        (default, 'Lava Louças');


insert into produtos values

        (default,'1','geladeira','Geladeira/Refrigerador Side By Side Frost Free Inox Electrolux - 127V (504L)','7.789,05','1.449,90','geladeira.jpg','Electrolux'),
        (default,'1','geladeira','Refrigerador Electrolux Duplex DC35A - 127V (260L)','1.849,01','1.689,00','geladeira1.jpg','Electrolux'),
        (default,'1','geladeira','Refrigerador Consul Biplex - 127V (334L)','2.157,38','1.753,84','geladeira2.jpg','Consul'),
        (default,'2','fogao','Fogão 05 Bocas Mesa de Vidro - Electrolux - 127V','1.659,39','1.357,67','fogao.jpg','Electrolux'),
        (default,'2','fogao','Fogão 4 Bocas Electrolux - Automático com Forno (70L)','579,67','493,28','fogao1.jpg','Electrolux'),
        (default,'3','microondas','Forno de Micro-ondas - Prata - 127V (27 L)','563,67 ','498,20','microondas.jpg','Philco'),
        (default,'3','microondas','Micro-ondas Philco - 127V (30L)','554,67','489,27','microondas1.jpg','Philco'),
        (default,'3','microondas','Micro-ondas Brastemp Inox - 127V (20L)','554,67','489,27','microondas2.jpg','Brastemp'),
        (default,'4','lavaRoupa','Lavadora Electrolux - Branca - 220V (13 Kg)','2.084,62','1.489,99','lavroupa.jpg','Electrolux'),
        (default,'4','lavaRoupa','Lavadora de Roupas Brastemp com Turbo Agitação - 220V (11kg)','2.056,97','1.719,99','lavroupa1.jpg','Brastemp'),
        (default,'5','lavaLouca','Lava-Louças Inox 14 Serviços - 220V','3.548,79','2.233,25','lavlouça.jpg','Inox'),
        (default,'5','lavaLouca','Lava-louças 8 Serviços Brastemp Ative! - 220V','2.368,79','1.804,85','lavlouça1.jpg','Brastemp');
        

CREATE VIEW info_produtos AS 

SELECT id_produto, 
categoria,
descricao_produto,
preco_real,
preco_desc,
marca
from produtos;

CREATE VIEW info_categoria AS

SELECT id_categoria,
categoria 
FROM categorias;