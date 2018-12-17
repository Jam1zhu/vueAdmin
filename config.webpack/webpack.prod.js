/**
 * Created by ZLY on 2018/12/15.
 */
const path = require('path')

const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
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
        // 压缩文件
        /*new CompressionPlugin({
            test: /.(js|css)$/,
            // asset: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
            algorithm: 'gzip',//算法
            deleteOriginalAssets: true
        })*/
    ]
})