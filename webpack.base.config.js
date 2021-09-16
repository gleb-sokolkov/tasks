const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
<<<<<<< HEAD
=======
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const webpack = require('webpack');
>>>>>>> 90ff6b2... imagemin settings
const config = require('./config');

module.exports = {
    entry: {
        static: config.webpack.entries.static.js,
    },
    output: {
        path: config.webpack.output.dist,
        filename: config.webpack.entries.bundles.js,
        publicPath: './',
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
                test: /\.(?:ico|git|png|jpg|jpeg|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: config.webpack.output.images,
                            esModule: false,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          mozjpeg: {
                            progressive: true,
                          },
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          }
                        }
                    },
                ],
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
            filename: config.webpack.entries.bundles.css
        }),
        new HtmlWebpackPlugin(config.webpack.entries.static.html),
        new ESLintWebpackPlugin(),
        new ImageminWebpWebpackPlugin({
            config: [{
                test: /\.(jpe?g|png)/,
                options: {
                  quality:  75
                }
              }],
              overrideExtension: true,
              detailedLogs: false,
              silent: false,
              strict: true,
        }),
    ],
};