const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BUILD_MODE = {
	dev: 'dev',
	prod: 'prod',
}


module.exports = function(env){
	const BUILD_ENV = env.BUILD_ENV || BUILD_MODE.dev;

	console.log("Custom:")
	console.log("[CONFIG]::[webpack.config.js]::[BULD_ENV]::Mode => ", BUILD_ENV);
	console.log()

	return {

		entry:{
			app: './src/index.js',
			print: './src/print.js',
			another: './src/another-module.js',
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: "Output Management",
			}),
			new webpack.NormalModuleReplacementPlugin(
				/(.*)PLATFORM_DEPENDENT(\.*)/,
				function(resource){
					resource.request = resource.request.replace(/PLATFORM_DEPENDENT/, `${BUILD_ENV}`);
				}
			),
			//new BundleAnalyzerPlugin(),
		],
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
			},
		},
		module: {
			rules: [
				{
					test: /\.(png|jpg|svg|gif)$/,
					use: [
						'file-loader',
					],
				},
			],
		},
	}
}
