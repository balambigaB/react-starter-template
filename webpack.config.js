const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 3000,
      historyApiFallback: true,
   },
   module: {
      rules: [
         {
            test: /\.(png|jpg|gif|jpeg|ico)$/i,
            loader:'url-loader'
         },
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ["@babel/preset-env", "@babel/preset-react"]
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
module.exports = config;