const path = require('path');
const webpack = require('webpack');

const BUILD_PATH = path.resolve(__dirname, './build');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'})
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development'})
}


module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        filename: '[name].js',
        path: BUILD_PATH
    },
    optimization: {
		minimize: false
	},
    devServer: {
        contentBase: BUILD_PATH,
        historyApiFallback: true,
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET ': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
        })
    ],
    devtool: 'source-map',
    mode: 'production',
};
