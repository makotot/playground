
vagrantのインストール
```
$ sudo gem install vagrant
```

box(仮想マシンのテンプレート)を取得
```
$ vagrant box add [box name]
```

取得済みのboxを表示
```
$ vagrant list
```

vagrantfileの作成
```
$ vagrant init [box name]
```

vagrant の起動
```
$ vagrant up
```

vagrantの状態確認
```
$ vagrant status
```

vagrantにSSHで接続
```
$ vagrant ssh
```

仮想マシンの再起動
```
$ vagrant reload
```

- [Vagrant by HashiCorp](https://www.vagrantup.com)
- [A list of base boxes for Vagrant - Vagrantbox.es](http://www.vagrantbox.es/)
