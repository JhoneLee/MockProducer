/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 16:49:58
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-10-15 16:48:55
*/

import koa from 'koa';
import views from 'koa-views';
import bodyparser from 'koa-bodyparser';
import path from 'path';
import page from './page';
import api from './api';
import koastatic from 'koa-static';
import webpack from 'webpack';
import webpackDev from './middleware/webpackDev';
import webpackHot from './middleware/webpackHot';
import config from '../config/webpack.config.dev';
let app = new koa();
// 设置静态文件目录
app.use(koastatic(path.resolve(__dirname,'../asset')));
app.use(koastatic(path.resolve(__dirname,'./dist')));
// 使用模板
app.use(views(path.resolve(__dirname,'../views/dev'),{
    map: {html: 'ejs'}
}));
// webpack 编译
const compiler = webpack(config);
app.use(webpackDev(compiler,{
    publicPath:config.output.publicPath
}));
app.use(webpackHot(compiler));

app.use(bodyparser());
app.use(page.routes()).use(page.allowedMethods());
app.use(api.routes()).use(api.allowedMethods());

app.listen('6199',()=>{
    console.log('server open 6199');
});