# Rails


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
`<%= render partial_file_name, パーシャルで使う変数:渡す変数` %>`  
パーシャルファイルは`_`始まりのファイル名にするのがルール。


## CRUD

新規作成(Create)、表示(Read)、更新(Update)、削除(Delete)の４つの機能を指す用語。

