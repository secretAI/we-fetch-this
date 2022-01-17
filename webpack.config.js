const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: `bundle.[name].js`,
    path: path.resolve(__dirname, './public')
  },
  devServer: {
    compress: true,
    port: 3001
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.js$/,
      //   exclude: '/node_modules',
      //   use: ['babel-loader']
      // }
    ]
  }
}
