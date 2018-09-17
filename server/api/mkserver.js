/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:15:30
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-09-06 13:49:10
*/

import Router from 'koa-router';
const router = new Router();
// import {checkPortOccupied} from '../../utils/checkPort';
import checkPortOccupied from '../../utils/checkPort';
import {mkInterfaceMap} from '../../producer/router';
import mkServer from '../../producer/server';
let port = 6200;
router.get('/mkserver',async (ctx,next)=>{
    ctx.status = 200;
    let result = await checkPortOccupied(port);
    if(typeof result == 'number'){
        let routes = await mkInterfaceMap('a881798c-1aca-4f7f-8bd5-9e55e89be4f2','test');
        mkServer(result,routes);
        ctx.body = {
            status:0,
            data:{
                port:result
            }
        }
    } else {
        let msg = '';
        if(result === false){
            msg = '请输入正常的端口号'
        } else {
            msg = '未知错误，请联系管理员'
        }
        ctx.body = {
            status:1,
            data:{
                msg
            }
        }
    }
});

export default router;