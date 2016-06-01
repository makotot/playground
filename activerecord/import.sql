drop table if exists posts;
create table posts (
  id integer primary key,
  title text,
  body text,
  created_at,
  updated_at
);
insert into posts(id,title,body) values (1, "title1", "body1");
insert into posts(id,title,body) values (2, "title2", "body2");
insert into posts(id,title,body) values (3, "title3", "body3");

drop table if exists comments;
create table comments (
  id integer primary key,
  post_id integer,
  body text,
  created_at,
  updated_at
);
insert into comments(id,post_id,body) values (1, 1, "comment1");
insert into comments(id,post_id,body) values (2, 1, "comment2");
insert into comments(id,post_id,body) values (3, 2, "comment3");
insert into comments(id,post_id,body) values (4, 3, "comment4");
insert into comments(id,post_id,body) values (5, 3, "comment5");
