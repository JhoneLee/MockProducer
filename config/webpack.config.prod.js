/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-10-15 14:23:29
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-10-15 17:21:51
*/

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',
    entry: {
        main:path.resolve(__dirname,'../client/main.js'),
        vendorVue: ['vue'],
        vendorVuex:['vuex'],
        vendorRouter:['vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../server/dist'),
        publicPath: '',
        filename: '/[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    loaders: {
                        less: ExtractTextPlugin.extract({
                            use:'css-loader!less-loader',
                            fallback:'vue-style-loader'
                        })
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
    plugins:[
        new ExtractTextPlugin('less.css'),
        new htmlWebpackPlugin({
            title:'test',
            filename: path.resolve(__dirname,'../views/dev/vue.html'),
            template: path.resolve(__dirname,'../views/tpl/vue.tpl.html')
        })
    ],
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
    devtool: 'cheap-module-source-map'
}