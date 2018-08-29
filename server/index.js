/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 16:49:58
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-29 17:16:47
*/

const koa = require('koa');
const views = require('koa-views');
const bodyparser = require('koa-bodyparser');
const path = require('path');
const page = require('./page');
const api = require('./api');
let app = new koa();
// 使用模板
app.use(views(path.resolve(__dirname,'./views'),{
    map: {html: 'ejs'}
}));
app.use(bodyparser());
app.use(page.routes()).use(page.allowedMethods());
app.use(api.routes()).use(api.allowedMethods());

app.listen('6199',()=>{
    console.log('server open 6199');
});