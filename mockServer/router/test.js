/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-28 15:15:11
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-31 15:05:57
*/

import Router from 'koa-router';
const router = new Router();
const json = require('../../asset/json/test.json');
router.get('/test',async (ctx,next)=>{
    // post: ctx.request.body
    // get: ctx.request.query
    console.log(ctx.request.query,'test');
    ctx.body = json;
});

export default router;