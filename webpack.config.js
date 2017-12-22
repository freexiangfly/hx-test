// var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
	entry: path.resolve("src/js/index.js"),

	output: {
		path: path.resolve("dist"),
		filename: "index.js",
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["react", "es2015"],
					}
				}
			}
		]
	},

	plugins: [
		new htmlWebpackPlugin({
			title: "hx-test",
			template: path.resolve("src/index.html")
		})
	]
}

