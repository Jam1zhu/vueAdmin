/**
 * Created by ZLY on 2018/12/15.
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const resolvePath = (dir) => path.join(__dirname, '..', dir)

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js'
    },
    devServer: {
        contentBase: resolvePath('dist')
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
})