# activerecord

Ruby on RailsのORマッパー


`import.sql`をつくる。
```
create table posts (
  id integer primary key,
  title text,
  body text,
  created_at,
  updated_at
);
```

```sh
$ sqlite3 blog.db
```

```
sqlite> .read import.sql
sqlite> .schema
CREATE TABLE posts (
  id integer primary key,
  title text,
  body text,
  created_at,
  updated_at
);
```

## Links

- [ActiveRecord入門 (全14回) - プログラミングならドットインストール](http://dotinstall.com/lessons/basic_activerecord)
