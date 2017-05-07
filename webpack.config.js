var path = require('path');
const webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var babelPresets = {presets: ['react', 'es2015']};

module.exports = {
    entry:[
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, './app/index.js'),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'React Biolerplate by Linghucong',
            template: path.resolve(__dirname, 'templates/index.ejs'),
            inject: 'body'
        })
    ]
};