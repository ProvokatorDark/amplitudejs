// Webpack v4
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//Плагин обработки css
const HtmlWebpackPlugin = require('html-webpack-plugin');// Плагин html шаблона
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var minify = require('html-minifier').minify;
module.exports = {
    entry: {main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        library:"lib"
    },
    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader',
                    "sass-loader"
                ]
            },

            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
        ],

    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html',
            minify:true
        }),
        new CopyWebpackPlugin([
            {
                from: './src/album-art',
                to: './album-art'
            }
        ]),
        new WebpackMd5Hash()
    ],
    devServer: {
        https: false,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    // devtool:"source-map"
};