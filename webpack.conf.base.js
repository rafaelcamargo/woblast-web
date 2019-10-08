const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [`${__dirname}/${project.scripts.source.index}`],
  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@environment$': `${__dirname}/${project.environments.source.root}/${env}.js`,
      '@scripts': `${__dirname}/${project.scripts.source.root}`,
      '@styles': `${__dirname}/${project.styles.source.root}`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: project.index.source.file,
      minify: {
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([{
      from: project.images.source.files,
      to: project.images.dist.root
    }])
  ]
}
