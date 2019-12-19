const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: project.scripts.dist.filename.dev
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: project.styles.dist.filename.dev
    })
  ],
  devServer: {
    historyApiFallback: {
      rewrites: [
        {
          from: /(.*)\/assets\//,
          to: function(context){
            return context.parsedUrl.pathname.replace(/(.*)\/assets\//, '/assets/');
          },
        }
      ]
    },
    port: project.server.port,
    host: project.server.host
  }
}
