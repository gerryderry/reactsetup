var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/app/build')
var APP_DIR = path.resolve(__dirname + '/app')

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPth: '/'
  },
  //for dev env only
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    //Built in plugin UglifyJsPlugin
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}

module.exports = config
