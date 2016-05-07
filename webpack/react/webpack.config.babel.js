import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true
    })
  ]
};
