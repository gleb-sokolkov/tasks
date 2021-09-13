const path = require('path');

module.exports = {
    port: 3000,
    paths: {
        common: {
            dirnames: {
                public: path.resolve(__dirname, 'public'),
            },
            files: {

            },
        },
    },
    webpack: {
        output: {
            dist: path.resolve(__dirname, 'public'),
        },
        entries: {
            images: path.resolve(__dirname, 'client/images/[hash][ext][query]'),
            index: {
                js: path.resolve(__dirname, 'client/index.js'),
                html: {
                    title: 'Index',
                    filename: 'index.html',
                    template: "./client/html/index.html",
                    chunks: ['index'],
                },
            }
        },
        bundles: {
            js: 'js/[name].bundle.js',
            css: 'css/[name].bundle.css',
        },
    },
};