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



## Links

- [tutorials/getting-started](http://webpack.github.io/docs/tutorials/getting-started/)
- [Webpack — The Confusing Parts — Medium](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.9rnfc94gq)

