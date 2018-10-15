/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:00:37
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-10-15 16:56:18
*/

import Router from 'koa-router';
const router = new Router();

router.get('/vue',async (ctx,next)=>{
    let title = 'vue架子';
    await ctx.render('vue',{
        title
    });
});

export default router;