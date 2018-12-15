/**
 * Created by ZLY on 2018/12/15.
 */
const path = require('path')

const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./webpack.base')

const resolvePath = (dir) => path.join(__dirname, '..', dir)

module.exports = merge(baseConfig, {
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [new UglifyJsPlugin]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: resolvePath('')
        }),
    ]
})