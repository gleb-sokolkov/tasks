const merge = require("webpack-merge").merge;
const base = require('./webpack.base.config');

module.exports = merge(base, {
    mode: 'production',
});