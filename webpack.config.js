const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssextractPlugin = require("mini-css-extract-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},

			{
				test: /\.css$/,
				use: [MiniCssextractPlugin.loader, "css-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new MiniCssextractPlugin(),
	],
};
