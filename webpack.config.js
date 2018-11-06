const path = require('path');

const BUILD_PATH = path.resolve(__dirname, './build');


module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name].js',
        path: BUILD_PATH
    },
    optimization: {
		minimize: false
	},
    devServer: {
        contentBase: BUILD_PATH,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/
            },
            {
                test: /\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }

                ]
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
};
