var webpack = require('webpack')
var html = require('html-webpack-plugin')

var config = {}
config.entry = ["./src/app.js"]
config.output = {
	path: "./build/static",
	publicPath: "/static/",
	filename: "build.js"
}
config.module = {
	loaders: [{
		test: /\.vue$/,
		loader: 'vue'
	}, {
		test: /\.js$/,
		loader: 'babel',
		exclude: /node_modules/
	}, {
		test: /\.(png|jpg|gif|ttf|eot|svg|woff)$/,
		loader: "file"
	}]
}
config.vue = {
	loaders: {
		js: 'babel'
	}
}
module.exports = config
