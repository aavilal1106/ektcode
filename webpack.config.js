// Libraries depencies
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var filePath = require('path');

// Paths where the app is hosted
var publicPath = 'public/';
var appPath = 'app/';

// fullpaths to build app
var buildPath = filePath.resolve(__dirname, publicPath);
var developPath = filePath.resolve(__dirname, appPath);

// settings
module.exports = {
	// index file to generate app
	entry: developPath + '/app.jsx',

	// output settings
	output: {
		filename: '/build.js',
		path: buildPath,
		publicPath: ''
	},

	// devtools
	devtool: 'source-map',

	// modules & loaders
	module: {
		loaders: [
			// watch all files jsx to generate build.js file
			{
				test: /\.jsx?/,
				include: developPath,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},

	// plugins
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', '/vendor.js'),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})//,
		//new webpack.optimize.UglifyJsPlugin()
	]
};
