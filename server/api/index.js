/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:15:21
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 15:55:36
*/

import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
const router = new Router({
    prefix:'/api'
});


fs.readdirSync(__dirname).filter(filename =>{
    return filename !== path.basename(__filename);
}).forEach((e)=>{
    let sub = require(`./${e}`)['default'];
    router.use(sub.routes());
    router.use(sub.allowedMethods());
});

export default router;