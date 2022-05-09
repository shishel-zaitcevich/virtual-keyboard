const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: {
      keep: /\.git/,
    },
  },
  mode: 'development',
  devServer: {
    open: true,
    host: 'localhost',
    static: './dist',
    client: {
      overlay: true,
    },
  },
  // devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Virtual Keyboard',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
