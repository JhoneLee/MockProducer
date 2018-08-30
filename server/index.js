/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 16:49:58
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 15:39:03
*/

import koa from 'koa';
import views from 'koa-views';
import bodyparser from 'koa-bodyparser';
import path from 'path';
import page from './page';
import api from './api';
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