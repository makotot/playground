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



## Links

- [tutorials/getting-started](http://webpack.github.io/docs/tutorials/getting-started/)
