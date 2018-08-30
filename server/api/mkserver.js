/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:15:30
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 16:14:02
*/

import Router from 'koa-router';
const router = new Router();
// import {checkPortOccupied} from '../../utils/checkPort';
import checkPortOccupied from '../../utils/checkPort';
console.log(checkPortOccupied,'out');
import mkServer from '../../mockServer/server';
let port = 6200;
router.get('/mkserver',async (ctx,next)=>{
    ctx.status = 200;
    console.log(checkPortOccupied,'inner');
    let result = await checkPortOccupied(port);
    console.log(result);
    if(typeof result == 'number'){
        mkServer(result)
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