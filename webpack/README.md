# webpack

## Install

```sh
$ npm i -g webpack
```

## Usage

`require`でJSもCSSも読み込める。デフォルトはJSのみ。JS以外は`loader`を利用する。

```sh
$ npm install css-loader style-loader
```

```js
require('!style!css./style.css')
```

```html
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>
</html>
```

```sh
$ webpack ./entry.js bundle.js
```

`require`の中で`!style!css`と書きたくない場合、CLIオプション`module-bind`から指定できる。

```js
//require('!style!css!./style.css')
require('./style.css')
```

```sh
$ webpack ./entry.js bundle.js --module-bind 'css=style!css'
```

## config

configを`webpack.config.js`で設定できる。

`webpack.config.js`を以下の通りにすると、
```
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}
```
で
```sh
$ webpack ./entry.js bundle.js --module-bind 'css=style!css'
```
と同じことが
```sh
$ webpack
```
で可能になる。

ターミナル上でプログレスバーを表示したい場合、
```sh
$ webpack --progress
```

ターミナル上で色付きで表示したい場合、
```sh
$ webpack --colors
```

ファイルの変更を監視したい場合、
```sh
$ webpack --watch
```
を使う。


### webpack-dev-server

webpackの開発サーバは`webpack-dev-server`をインストールすると使える。

```sh
$ npm i -g webpack-dev-server
```
```sh
$ webpack-dev-server --progress
```

## html

HTMLを出力する場合は、`html-webpack-plugin`を使う。

```js
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'dist/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // <= テンプレートファイルを指定できる
      filename: 'index.html' // <= 出力先のHTMLファイル名を指定できる
    })
  ]
};
```

## webpack.config.babel.js

`gulp`のように`config`をes6で記述できる。

```sh
$ touch webpack.config.babel.js
$ npm i --save-dev babel-core babel-preset-es2015
$ touch .babelrc
```

`.babelrc`
```json
{
  "presets": ["es2015"]
}
```

`webpack.config.babel.js`
```js
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true
    })
  ]
};
```

## babel-loader

babelをwebpackで利用するには、`babel-loader`を利用する。

```sh
$ npm i --save-dev babel-loader
```
`webpack.config.babel.js`に`loader`を追加する。
```js
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
```



## Links

- [tutorials/getting-started](http://webpack.github.io/docs/tutorials/getting-started/)
- [Webpack — The Confusing Parts — Medium](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.9rnfc94gq)
- [ampedandwired/html-webpack-plugin: Simplifies creation of HTML files to serve your webpack bundles](https://github.com/ampedandwired/html-webpack-plugin)
- [babel/babel-loader: Webpack plugin for Babel](https://github.com/babel/babel-loader)

