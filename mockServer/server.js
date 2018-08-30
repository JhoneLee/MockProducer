/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-28 15:08:56
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 15:34:50
*/

import Koa from 'koa';
import koastatic from 'koa-static';
import path from 'path';
import bodyparser from 'koa-bodyparser';
import router from './router';
const app = new Koa();
app.use(koastatic(path.resolve(__dirname,'./json')));
app.use(bodyparser());
app.use(router.routes()).use(router.allowedMethods());

const mkServer  = (port)=>{
    app.listen(port,()=>{
        console.log(`server open on ${port}`);
    });
}

export default mkServer;

