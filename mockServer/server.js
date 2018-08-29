/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-28 15:08:56
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-29 13:04:07
*/

const Koa = require('koa');
const koastatic = require('koa-static');
const path = require('path');
const bodyparser = require('koa-bodyparser');
const router = require('./router');
const app = new Koa();
app.use(koastatic(path.resolve(__dirname,'./json')));
app.use(bodyparser());
app.use(router.routes()).use(router.allowedMethods());

const mkServer  = (port)=>{
    app.listen(port,()=>{
        console.log(`server open on ${port}`);
    });
}

module.exports = {
    mkServer
}

