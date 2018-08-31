/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-31 11:27:40
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-31 11:31:42
*/

import Router from 'koa-router';
import {makeUser} from '../../redis/userMaker';

const router = new Router();
router.get('/makeuser',async (ctx,next)=>{
    let res = await makeUser();
    console.log(res);
    ctx.status = 200;
    ctx.body = {
        status:0,
        data:res
    }
});

export default router;