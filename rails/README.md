# Rails

## DRY

Don't Repeat Yourself


## CoC

Convention over Configuration


## MVC

- model: データ
- view: 画面
- controller: modelとviewをとりもつもの


railsアプリの作成
```sh
$ rails new [app name]
```

ローカルサーバの起動
```sh
$ rails s
```

CRUDを行うwebアプリケーションの雛形を生成
```sh
$ rails g scaffold book title:string memo:text
```

コントローラとビューの生成
```sh
$ rails g controller [name] [action ...]
```

マイグレーション実行
```sh
$ rake db:migrate
```


## routes

http://localhost:3000/rails/info/routesでroutes対応表が確認できる。  
Routesは`config/routes.rb`に記述する。


## controller


## view

`render`メソッドで別ファイルを埋め込める。埋め込み用のviewファイルをパーシャルと呼ぶ。  
`<%= render partial_file_name, パーシャルで使う変数:渡す変数 %>`  
パーシャルファイルは`_`始まりのファイル名にするのがルール。


## model

app/models配下。  
モデル名は英語の単数形、大文字始まりにするのがルール。  
モデルはRubyでdbを扱いやすくする機能を持ってる。


## CRUD

新規作成(Create)、表示(Read)、更新(Update)、削除(Delete)の４つの機能を指す用語。



## blog作成

```sh
$ rails new til
$ cd til
$ bundle exec rails g scaffold post title:string body:string
$ rake db:migrate
```

### MYSQLをDBにする

http://www.virment.com/rails-setup-mysql/

mysqlユーザの作成
```sh
$ mysql -u root

mysql> CREATE USER 'makotot'@'localhost' IDENTIFIED BY '********';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'user_name'@'localhost';
```

DB設定ファイル`config/database.yml`を修正。  
パスワード等は、環境変数で管理する。  
http://kokonotsu.net/log/%5Brails%5D%20github%E3%81%AB%E4%B8%8A%E3%81%92%E3%81%9F%E3%81%8F%E3%81%AA%E3%81%84%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89%E7%AD%89%E3%81%AE%E7%AE%A1%E7%90%86%E6%96%B9%E6%B3%95/
```sh
$ touch config/settings.yml
```

settings.ymlに環境変数を記述して、.gitignoreに追加しておく。
```
defaults: &defaults
  DB_USERNAME: user_name
  DB_PASSWORD: ********
  DB_SOCKET: /path/to/sock

development:
  <<: *defaults

test:
  ...
```

Gemfileにmysqlを追加。
```
gem 'mysql2'
```


### カラム追加

https://joppot.info/2014/05/23/1430

`rails g migration Add[カラム名]To[テーブル名] カラム名:型`で追加。

```sh
$ bundle exec rails g migration AddTagToPosts tag:string
```
カラムに変更を加えたらmigrate
```sh
$ bundle exec rake db:migrate
```

### サーバをunicornに変更

http://tachesimazzoca.github.io/wiki/rails3/unicorn.html

`Gemfile`に`unicorn`を追加して`bundle update`。
```
gem 'unicorn'
```

`config/unicorn.rb`を作成。

```rb
# coding: utf-8

worker_processes 2

stderr_path File.expand_path('../../log/unicorn/stderr.log', __FILE__)
stdout_path File.expand_path('../../log/unicorn/stdout.log', __FILE__)

pid File.expand_path('../../log/unicorn.pid', __FILE__)

preload_app false
```

```sh
$ bundle exec unicorn_rails -c config/unicorn.rb -p 8080
```
`unicorn_rails`でサーバ起動。


### カラムの型変更

```sh
$ rails g migration クラス名
```
クラス名は何でも良い？

生成されたmigrationファイルに`up`/`down`メソッドを記述しておくと、ロールバックできる？
```rb
class ChangeColumnToPost < ActiveRecord::Migration
  def up
    change_column :posts, :body, :text
  end

  def down
    change_column :posts, :body, :string
  end

end
```



## Links

- [Ruby on Rails 4入門 (全28回) - プログラミングならドットインストール](http://dotinstall.com/lessons/basic_rails_v2)

