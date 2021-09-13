const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const config = require('./config');

module.exports = {
    entry: {
        slider: config.webpack.entries.slider.js,
        static: config.webpack.entries.static.js,
    },
    output: {
        path: config.webpack.output.dist,
        filename: config.webpack.bundles.js,
        publicPath: '/',
    },
    module: {
        rules: [
            //babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            //static-images
            {
                test: /\.(?:ico|git|png|jpg|jpeg)$/,
                type: 'asset/resource',
                generator: {
                    filename: config.webpack.entries.images,
                },
            },
            //fonts
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
            },
            //scss css sass
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: config.webpack.bundles.css
        }),
        new HtmlWebpackPlugin(config.webpack.entries.slider.html),
        new HtmlWebpackPlugin(config.webpack.entries.static.html),
        new ESLintWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin({
                parallel: true,
            })
        ],
    },
};