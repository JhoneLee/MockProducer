/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:00:37
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-29 17:02:02
*/

const Router = require('koa-router');
const router = new Router();

router.get('/server',async (ctx,next)=>{
    let title = '制造服务器';
    await ctx.render('mkserver',{
        title
    });
});

module.exports = router;