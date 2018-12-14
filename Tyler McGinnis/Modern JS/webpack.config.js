var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // @babel/polyfill is necessary because incase the user isn't using a brower that
  // supports Promise, the app that used any Promise will not work.
  // by installing babel/polyfill, ./app/index.js can now use promises
  entry: ['@babel/polyfill','whatwg-fetch', './app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
};