/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-10-15 14:23:18
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-10-15 17:22:43
*/

var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    mode:'development',
    entry: path.resolve(__dirname,'../client/main.js'),
    output: {
        path: path.resolve(__dirname, '../server/dist'),
        publicPath: '/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: 'vue-style-loader!css-loader!less-loader',
                        js:'babel-loader'
                    }
                }
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            Components: path.resolve(__dirname, '../client/components/')
        },
        extensions: ['.js', '.vue','.less']
    },
    performance: {
        hints: false
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'test',
            filename: path.resolve(__dirname,'../views/dev/vue.html'),
            template: path.resolve(__dirname,'../views/tpl/vue.tpl.html')
        })
    ],
    devtool: 'cheap-module-source-map'
}