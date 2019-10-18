const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;





const BUILD_MODE = {
	dev: 'dev',
	prod: 'prod',
}

module.exports = function(env){

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
			//For NormalModuleReplacementPlugin Evaluation
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
				//RELEVANT IFDEFLOADER -> this is how we feed the ifdef-loader the options (ifdef_query) (in stringform)
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						`ifdef-loader?${ifdef_query}`,
					],
				},
			],
		},
	}
}
