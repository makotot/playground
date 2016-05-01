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

`new`で以下のようなディレクトリ、ファイル群が生成される。
```sh
❯ tree -L 1
.
├── Gemfile
├── Gemfile.lock
├── README.rdoc
├── Rakefile
├── app
├── bin
├── config
├── config.ru
├── db
├── lib
├── log
├── public
├── test
├── tmp
└── vendor

10 directories, 5 files
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

## scaffold

```sh
$ rails g scaffold User name:string score:integer
$ rake db:migrate # db作成
$ rails s
```
`localhost:3000/users/`が出来上がってる。


## TaskApp

```sh
$ rails new taskapp
$ cd taskapp
$ rails s
```


### model作成

```sh
$ rails g model Project title:string
Running via Spring preloader in process 31017
      invoke  active_record
      create    db/migrate/20160430031222_create_projects.rb
      create    app/models/project.rb
      invoke    test_unit
      create      test/models/project_test.rb
      create      test/fixtures/projects.yml
```
modelは単数形かつ大文字始まりで。
型はデフォルトがstringなのでstringの場合は省略可。

```
$ rake db:migrate
== 20160430031222 CreateProjects: migrating ===================================
-- create_table(:projects)
   -> 0.0018s
== 20160430031222 CreateProjects: migrated (0.0018s) ==========================
```
`migrate`でDBに反映。


### DB

現在使用中のDBに`rails db`でアクセスできる。
```sh
$ rails db
SQLite version 3.8.5 2014-08-15 22:37:57
Enter ".help" for usage hints.
sqlite>
```

sqliteなら`.schema`でテーブル構造を確認できる。
```sh
sqlite> .schema
CREATE TABLE "schema_migrations" ("version" varchar NOT NULL);
CREATE UNIQUE INDEX "unique_schema_migrations" ON "schema_migrations" ("version");
CREATE TABLE "projects" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
```


### console

`rails console`でコンソールが起動出来る。

```sh
$ rails console # rails c でもok
Running via Spring preloader in process 31147
Loading development environment (Rails 4.2.6)
irb(main):001:0>
```

コンソールから`Project`を作成してみる。

```sh
irb(main):001:0> p = Project.new(title: "p1");
irb(main):002:0* p.save
   (0.1ms)  begin transaction
  SQL (0.6ms)  INSERT INTO "projects" ("title", "created_at", "updated_at") VALUES (?, ?, ?)  [["title", "p1"], ["created_at", "2016-04-30 03:23:33.840796"], ["updated_at", "2016-04-30 03:23:33.840796"]]
   (2.6ms)  commit transaction
=> true
```

`rails db`でprojectsを確認してみる。

```sh
$ rails db
SQLite version 3.8.5 2014-08-15 22:37:57
Enter ".help" for usage hints.
sqlite> select * from projects;
1|p1|2016-04-30 03:23:33.840796|2016-04-30 03:23:33.840796
```


### controller作成

```sh
$ rails g controller Projects # controllerは必ず複数形で。
Running via Spring preloader in process 31316
      create  app/controllers/projects_controller.rb
      invoke  erb
      create    app/views/projects
      invoke  test_unit
      create    test/controllers/projects_controller_test.rb
      invoke  helper
      create    app/helpers/projects_helper.rb
      invoke    test_unit
      invoke  assets
      invoke    coffee
      create      app/assets/javascripts/projects.coffee
      invoke    scss
      create      app/assets/stylesheets/projects.scss
```

`config/routes.rb`に`projects`を追加。

```rb
Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  resources :projects # projectsに関するURLを自動生成してくれる
```

`rake routes`で`projects`が反映されていることを確認できる。

```sh
$ rake routes
      Prefix Verb   URI Pattern                  Controller#Action
    products GET    /products(.:format)          products#index
             POST   /products(.:format)          products#create
 new_product GET    /products/new(.:format)      products#new
edit_product GET    /products/:id/edit(.:format) products#edit
     product GET    /products/:id(.:format)      products#show
             PATCH  /products/:id(.:format)      products#update
             PUT    /products/:id(.:format)      products#update
             DELETE /products/:id(.:format)      products#destroy
```

### 一覧表示

`app/controllers/projects_controller.rb`に`index`をつくる。
```rb
class ProjectsController < ApplicationController

  def index
    @projects = Project.all
    # @始まりの変数はviewでそのまま使える
  end
end
```

`app/views/projects/`にerbファイルをつくる。
```sh
$ touch app/views/projects/index.html.erb
```

```erb
<h1>Projects</h1>
<ul>
  <% @projects.each do |project| %>
    <li><%= project.title %></li>
  <% end %>
</ul>
```


### 共通のテンプレート

`app/views/layouts/application.html.erb`が共通のテンプレート。  
`<%= yield %>`が各ページの中身になる。


### image_tag

画像のヘルパータグ。`<%= image_tag "image-name.png" %>`で、`app/assets/images/`配下の画像を参照できる。


### link_to

リンクのヘルパータグ。`<%= link_to "link text", "url" %>`。


### 詳細画面

一覧にリンクを用意する。
```erb
  <% @projects.each do |project| %>
    <li><%= link_to project.title, project_path(project.id) %></li>
  <% end %>
```

controllerに`show`を用意する。
```rb
def show
end
```

`app/views/show.html.erb`を作る。

```erb
<h1><%= @project.title %></h1>
```


## rails.vim

`projects`コントローラへの移動。
```
:Econtroller projects
```

`project`モデルへの移動。
```
:Emodel project
```



## Links

- [Ruby on Rails 4入門 (全28回) - プログラミングならドットインストール](http://dotinstall.com/lessons/basic_rails_v2)
- [tpope/vim-rails: rails.vim: Ruby on Rails power tools](https://github.com/tpope/vim-rails)

