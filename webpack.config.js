const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.css'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),new HtmlWebpackPlugin({
    template:path.resolve(__dirname, './dist/index.html')
  })],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
};
