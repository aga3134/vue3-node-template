const path = require("path");
const webpack = require("webpack");
const {VueLoaderPlugin} = require('vue-loader')
const Config = require("./config.json");

module.exports = {
	mode: Config.mode, // "production" | "development" | "none"
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
    }
  },
	entry: {
		"js/main": ["./src/js/main.js"],
	},
	output:{
		path: path.resolve(__dirname,"dist/"+Config.mode),
		filename: "[name].js",
		publicPath: "/dist/"+Config.mode
	},
	module:{
		rules: [
			{
				test: /\.js$/,
        loader: "babel-loader",
        include: [
					path.resolve(__dirname, "src")
				],
        exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
		]
	},
	plugins:[
		new VueLoaderPlugin()
	]
};