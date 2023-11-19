CREATE DATABASE employee_db;
use employee_db;

CREATE TABLE people(
id int not null auto_increment,
name varchar(255),
username varchar(255),
password varchar(255),
role varchar(255),
primary key (id)
);

insert into people(name,username,password,role) values ('harsh','harsh12','test','admin');
insert into people(name,username,password,role) values ('aditi','aditi12','testa','teacher');
insert into people(name,username,password,role) values ('bela','bela12','testb','student');
select * from people;

alter table people modify username varchar(255) unique;

create table assignment(
a_id int not null auto_increment,
a_name varchar(255),
subject varchar(255),
p_id int,
primary key (a_id),
foreign key(p_id) references people(id)
);

alter table assignment modify p_id int default 1;

insert into assignment(a_name,subject,p_id) values ('practial1','DSA',1);
insert into assignment(a_name,subject,p_id) values ('practial2','DBMS');
insert into assignment(a_name,subject,p_id) values ('practial3','CN');
insert into assignment(a_name,subject,p_id) values ('practial4','OOP');

