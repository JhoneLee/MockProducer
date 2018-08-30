/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-28 15:15:11
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 15:29:19
*/

import Router from 'koa-router';
const router = new Router();
const json = require('../../json/test.json');
router.get('/test',async (ctx,next)=>{
    // post: ctx.request.body
    // get: ctx.request.query
    console.log(ctx.request.query,'test');
    ctx.body = json;
});

export default router;