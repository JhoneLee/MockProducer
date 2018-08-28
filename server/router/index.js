/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-28 15:13:54
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-28 16:38:52
*/

/*
* @Author: liyunjiao
* @Date:   2018-08-08 14:42:55
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-08-14 15:04:38
*/

const Router = require('koa-router');

const path = require('path');
const fs = require('fs');
const router = new Router({
    prefix:'/api'
});

router.all('*',async (ctx,next)=>{
    // console.log(ctx.request.origin);
    ctx.set('Content-Type','text/json; charset=UTF-8');
    ctx.set('Access-Control-Allow-Origin',ctx.request.origin);
    ctx.set('Access-Control-Allow-Credentials',true);
    ctx.set('Access-Control-Allow-Headers','Content-Type,Cache-Control,X-Requested-With,Expires');
    ctx.set('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    await next();
});

fs.readdirSync(__dirname).filter(filename =>{
    return filename !== path.basename(__filename);
}).forEach((e)=>{
    let sub = require(`./${e}`);
    router.use(sub.routes());
    router.use(sub.allowedMethods());
});

module.exports = router;