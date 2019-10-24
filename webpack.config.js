const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BUILD_MODE = {
	dev: 'dev',
	prod: 'prod',
}

module.exports = function(env){

	if(!env) env = {BUILD_ENV:BUILD_MODE.dev}

	//ifdef-loader specific
	const preprocessor = {
		//"ifdef-verbose": true, //for verbose output
		//"ifdef-triple-slash":true, //add this to use double slash comment instead of triple slash
		BUILD_ENV : env ? env.BUILD_ENV || BUILD_MODE.dev : BUILD_MODE.dev,
	}
	const ifdef_query = JSON.stringify(preprocessor);

	console.log("Custom:")
	console.log("[CONFIG]::[webpack.config.js]::[BULD_ENV]::Mode => ", preprocessor.BUILD_ENV);
	console.log()

	return {
		resolve: {
			alias: {
			 'vue$': 'vue/dist/vue.esm.js', // ‘vue/dist/vue.common.js’ for webpack 1
				}
		},
		entry:{
			app: './src/index.js',
			tsproto: './src/tsproto.ts',
		},
		devtool: 'inline-source-map',
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
			},
			minimize: true,
			minimizer: [new TerserPlugin()],
		},
		module: {
			rules: [
				{
					test: /\.(png|jpg|svg|gif)$/,
					use: [
						'file-loader',
					],
				},
				//RELEVANT IFDEFLOADER -> this is how we feed the ifdef-loader the options (ifdef_query) (in stringform)
				{ test: /\.js$/, exclude: /node_modules/, use: [ 'babel-loader', `ifdef-loader?${ifdef_query}`, ], },
				{ test: /\.vue$/, loader: 'vue-loader', },
				{ test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
				{ test: /\.tsx?$/, use: [ 'ts-loader', `ifdef-loader?${ifdef_query}`, ], exclude: /node_modules/, },
			],
		},
		devServer: {
			open: true,
			hot: true,
			port: preprocessor.BUILD_ENV === BUILD_MODE.dev ? 8080 : 8081,
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: "Hi!",
				template: './src/index.html',
			}),
			//RELEVANT NormalModuleReplacementPlugin -> This is where we define 'what to replace' and 'with what'
			new webpack.NormalModuleReplacementPlugin(
				//filter import/require sources with this regexp
				/(.*)PLATFORM_DEPENDENT(\.*)/,
				//apply this callback on them
				function(resource){
					resource.request = resource.request.replace(
						/*what*//PLATFORM_DEPENDENT/,
						/*with*/`${preprocessor.BUILD_ENV}`);
				}
			),
			//RELEVANT NormalModuleReplacementPlugin -> This is where we define 'what to replace' and 'with what'
			new webpack.NormalModuleReplacementPlugin(
				//filter import/require sources with this regexp
				/(\.i\.)/,
				//apply this callback on them
				function(resource){
					resource.request = resource.request.replace(
						/*what*//i/,
						/*with*/`${preprocessor.BUILD_ENV}`);
				}
			),
			new VueLoaderPlugin(),
			new webpack.DefinePlugin({
				'process.env.frog': JSON.stringify(env.BUILD_ENV),
				ENV: JSON.stringify(env.BUILD_ENV),
			}),
			//For NormalModuleReplacementPlugin Evaluation
			//new BundleAnalyzerPlugin(),
			new webpack.HotModuleReplacementPlugin(),
		],
	}
}
