# webpack

## Install

```sh
$ npm i -g webpack
```

## Usage

`require`でJSもCSSも読み込める。

```js
require('./style.css')
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



## Links

- [tutorials/getting-started](http://webpack.github.io/docs/tutorials/getting-started/)
