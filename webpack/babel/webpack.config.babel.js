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
