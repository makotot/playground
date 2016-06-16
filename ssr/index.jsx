var http = require('http');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
require("babel-register");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(
    ReactDOMServer.renderToString(
      <html>
        <head>
          <title>hello</title>
        </head>
        <body>
          <h1>jsx</h1>
        </body>
      </html>
    )
  );
}).listen(3000);
console.log('server running');
