var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './index.js',
    bundleCommon: './index.common.js',
    // vendor: './vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor'
		// }),
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
      },
      comments: true,
      mangle: false,
			beautify: true,
    })
  ],
  stats: {
    reasons: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
