/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-30 16:29:16
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 16:57:10
*/

import Router from 'koa-router';
import store,{redis} from '../../redis';
const router = new Router();

router.get('/redis',async (ctx,next)=>{
    ctx.status = 200;
    let status = 0;
    let result = await redis.hgetall('person:2').then(r=>r).catch(e=>{
            status = 1;
            return {error:e};
        });
    console.log(result);
    ctx.body = {
        status,
        data:result
    };
});

export default router;