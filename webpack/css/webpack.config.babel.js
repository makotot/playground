import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const extractCSS = new ExtractTextPlugin('./css/app.css')

export default {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  devServer: {
    inline: true,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      },
      //{
      //  test: /\.css$/,
      //  loaders: ['style', 'css']
      //},
      //{
      //  test: /\.scss$/,
      //  loaders: ['style', 'css', 'sass']
      //},
      {
        test: /\.scss$/,
        loader: extractCSS.extract([
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass'
        ])
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true
    }),
    extractCSS
  ]
};
